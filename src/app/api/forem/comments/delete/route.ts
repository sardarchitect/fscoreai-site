import { NextRequest, NextResponse } from 'next/server';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { db } from '@/src/lib/db';
import { commentsTable } from '@/src/lib/schema/forem';
import { eq } from 'drizzle-orm';
import { validateCommentOwnership } from '@/src/lib/helpers/validateCommentOwnership';
import { handleErrorResponse } from '@/src/types/api_response';

export async function DELETE(request: NextRequest) {
  const authResponse = await hasAuth(request);
  if (!authResponse.ok) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const sessionUser = await authResponse.json();

  try {
    const { commentId } = await request.json();

    // Validate comment ownership
    await validateCommentOwnership(commentId, sessionUser.user.id);

    // Delete the comment
    await db.delete(commentsTable).where(eq(commentsTable.id, commentId));

    return NextResponse.json(
      { message: 'Comment deleted successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error deleting comment:', error);
    return handleErrorResponse(error);
    // return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
