import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db'; // Drizzle ORM instance
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { handleErrorResponse } from '@/src/types/api_response';
import { postsTable } from '@/src/lib/schema/forem';


/**
 * GET: Handles get organization.
 */
export async function GET(request: Request) {
  // Authentication check
  // const authResponse = await hasAuth();
  // if (!(authResponse.ok === true)) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  // }
  // const sessionUser = await authResponse.json();

  try {

    return await db.transaction(async (trx) => {
      // Check if the POst already exists
      const Posts = await trx
        .select({
          slug: postsTable.slug,
          title: postsTable.title,
          content: postsTable.content,
          category: postsTable.category,
          likes: postsTable.likes,
          views: postsTable.views,
        })
        .from(postsTable)

      if (Posts.length === 0) {
        throw new Error('No Post not exists')
      }

      return NextResponse.json(
        { message: `Reading Post successful`, Posts: Posts },
        { status: 201 }
      );
    })

  } catch (error: any) {
    console.error('Error in POST /api/post/read/dashboard/posts:', error);
    return handleErrorResponse(error);
  }
}
