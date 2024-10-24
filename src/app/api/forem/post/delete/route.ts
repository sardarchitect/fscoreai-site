import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db'; // Drizzle ORM instance
import { and, eq } from 'drizzle-orm/expressions';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { handleErrorResponse } from '@/src/types/api_response';
import { postsTable } from '@/src/lib/schema/forem';


export async function DELETE(req: NextRequest) {
  //  Authenticate the request
  const authResponse = await hasAuth();
  if (!(authResponse.ok === true)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const sessionUser = await authResponse.json();

  try {
 // **Parse the request body**  
 const { post_slug } = await req.json();

 // **Validate required fields**  
 if (!post_slug) {
   return NextResponse.json({ error: 'Post slug is required' }, { status: 400 });
 }
    //  Initialize database transaction
    return await db.transaction(async (trx) => {
      const post = await trx
      .select({postId: postsTable.id})
      .from(postsTable)
      .where(and(eq(postsTable.slug, post_slug), eq(postsTable.ownerId, sessionUser.user.id)));

    if (post.length === 0) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
      // Delete the post
      const deletedRows = await trx
      .delete(postsTable)
      .where(eq(postsTable.id, post[0].postId))
      .returning({title: postsTable.title});
      if(deletedRows.length === 0 ){
        throw new Error('Failed to delete post')
      }

      //  Commit the transaction
      return NextResponse.json({ message: `post deleted successfully: ${deletedRows[0].title}` }, { status: 200 });
    });

  } catch (error: any) {
    console.error('Error in DELETE /api/organization:', error);
    return handleErrorResponse(error);
  }
}