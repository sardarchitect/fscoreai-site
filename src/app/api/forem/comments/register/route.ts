import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { commentsTable, postsTable } from '@/src/lib/schema/forem';
import { eq } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  // Check for user authentication
  const authResponse = await hasAuth();
  if (!authResponse.ok) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const sessionUser = await authResponse.json();

  try {
    // Parse the request body
    const { postId, text, parentId } = await request.json();

    // Check if post exists
    const post = await db
      .select()
      .from(postsTable)
      .where(eq(postsTable.id, postId))
      .limit(1);

    if (!post.length) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Insert new comment into the database
    const newComment = await db
      .insert(commentsTable)
      .values({
        text,
        postId,
        parentId: parentId || null, // For top-level comments, parentId is null
        ownerId: sessionUser.user.id,
      })
      .returning();

    return NextResponse.json(
      { message: 'Comment created successfully', comment: newComment },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating comment:', error);
    return NextResponse.json({ error: 'Failed to create comment' }, { status: 500 });
  }
}
