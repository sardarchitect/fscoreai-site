import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db';
import { eq, and } from 'drizzle-orm/expressions';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { handleErrorResponse } from '@/src/types/api_response';
import { postsTable } from '@/src/lib/schema/forem';
import { generateUniqueSlug } from '@/src/lib/actions/posts';

interface UpdatePostData {
  post_slug: string;
  title?: string;
  content?: string;
  category?: string;
  solved?: boolean;
  views?: boolean;
}

// Utility function to handle views increment
const handleViewsIncrement = (currentViews: number, increment?: boolean): number => {
  if (increment) {
    return currentViews + 1;
  }
  return currentViews; // No change if `false`
};

// API to handle updating a post
export async function PUT(request: Request) {
  // **Authentication Check**  
  const authResponse = await hasAuth(request);
  if (!authResponse.ok) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const sessionUser = await authResponse.json();

  try {
    // **Parse the request body**  
    const { post_slug, title, content, category, solved, views }: UpdatePostData = await request.json();

    // **Validate required fields**  
    if (!post_slug) {
      return NextResponse.json({ error: 'Post slug is required' }, { status: 400 });
    }

    
    // **Transaction to update the post**  
    return await db.transaction(async (trx) => {
      // **Check if the post exists and is owned by the user**  
      const post = await trx
        .select()
        .from(postsTable)
        .where(and(eq(postsTable.slug, post_slug), eq(postsTable.ownerId, sessionUser.user.id)));
  
      if (post.length === 0) {
        return NextResponse.json({ error: 'Post not found or post with this email is not exist' }, { status: 404 });
      }
  
      // **If title is provided, generate a unique slug**  
      let slug = post[0].slug;
      if (title && title !== post[0].title) {
        slug = await generateUniqueSlug(title);
      }
      const updatedViews = handleViewsIncrement(post[0].views, views); // `views` is boolean from request

      const updatedPost = await trx
        .update(postsTable)
        .set({
          title: title ?? post[0].title,
          content: content ?? post[0].content,
          category: category ?? post[0].category,
          solved: typeof solved === 'boolean' ? solved : post[0].solved,
          views: updatedViews, // Use the calculated views
          slug,
          updatedAt: new Date(),
        })
        .where(eq(postsTable.id, post[0].id))
        .returning();

      return NextResponse.json(
        { message: 'Post updated successfully', post: updatedPost },
        { status: 200 }
      );
    });
  } catch (error: any) {
    console.error('Error in PATCH /api/posts:', error);
    return handleErrorResponse(error); // Handle error gracefully
  }
}




