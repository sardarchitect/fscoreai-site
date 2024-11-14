import { NextRequest, NextResponse } from 'next/server';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { db } from '@/src/lib/db';
import { eq } from 'drizzle-orm';
import { validateCommentOwnership } from '@/src/lib/helpers/validateCommentOwnership';
import { commentsTable } from '@/src/lib/schema/forem';
import { handleErrorResponse } from '@/src/types/api_response';

export async function PUT(request: NextRequest) {
  const authResponse = await hasAuth();
  if (!authResponse.ok) {
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  }
  const sessionUser = await authResponse.json();

  try {
    const { commentId, text } = await request.json();

    // Validate comment ownership
    await validateCommentOwnership(commentId, sessionUser.user.id);

    // Update the comment text
    const updatedComment = await db
      .update(commentsTable)
      .set({ text })
      .where(eq(commentsTable.id, commentId))
      .returning();

    return NextResponse.json(
      { message: 'Comment updated successfully', comment: updatedComment },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error updating comment:', error);
    return handleErrorResponse(error);
    // return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
