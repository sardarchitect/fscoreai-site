import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db'; // Drizzle ORM instance
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { handleErrorResponse } from '@/src/types/api_response';
import { commentsTable, postsTable } from '@/src/lib/schema/forem';
import { eq } from 'drizzle-orm';


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
  const {postId} : any = request.json();

  try {
    return await db.transaction(async (trx) => {
      const Posts = await trx
        .select({
          text: commentsTable.text
        })
        .from(commentsTable)
        .where(eq(commentsTable.post_id, postId))

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
