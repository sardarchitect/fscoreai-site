import { db } from '@/src/lib/db';
import { commentsTable } from '@/src/lib/schema/forem';
import { eq } from 'drizzle-orm';

/**
 * Validates if a comment exists and if the user is authorized to perform actions on it.
 * @param {string} commentId
 * @param {string} userId 
 * @returns {Promise<any>} 
 * @throws {Error} 
 */
export async function validateCommentOwnership(commentId: string, userId: string) {
  const existingComment = await db
    .select()
    .from(commentsTable)
    .where(eq(commentsTable.id, commentId))
    .limit(1);

  if (!existingComment.length) {
    throw Object.assign(new Error('Comment not found'), { code: 404 });
  }

  if (existingComment[0].ownerId !== userId) {
    throw Object.assign(new Error('Unauthorized'), { code: 403 });
  }

  return existingComment[0]; // Return the comment for further use if needed
}
