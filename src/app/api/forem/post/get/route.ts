import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { postsTable } from '@/src/lib/schema/forem';
import { eq } from 'drizzle-orm';
import { likePostQueue } from '@/src/lib/queues/likePostQueue';

export const checkAndAddLikePostJob = async (postId: string, userId: string) => {
  const jobId = `like-post-${postId}-${userId}`;

  // const existingJob = await likePostQueue.getJobs();
  const existingJob = await likePostQueue.getJobCounts('wait', 'completed', 'failed');
//  await worker
  if (existingJob) {
    console.log(`Job already exists for postId: ${postId} and userId: ${JSON.stringify(existingJob, null, 2)} `);
    return existingJob; // Return the existing job instead of adding a new one
  }
  return existingJob; // Return the existing job instead of adding a new one
};


export async function GET(request: Request) {
  // Authentication check
  const authResponse = await hasAuth(request);
  if (!authResponse.ok) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const sessionUser = await authResponse.json();

  try {
    // Insert new post into the database
    // const existingJob = await checkAndAddLikePostJob("1d6584ca-b3cd-4403-a34a-6ac007af0a53", sessionUser.user.id)
    const getAllPosts = await db
      .select()
      .from(postsTable)
      .where(eq(postsTable.ownerId, sessionUser.user.id))
      // if (getAllPosts.length === 0) {
      //   throw new Error('Post not exists')
      // }

    return NextResponse.json(
      // { message: 'Post fetched successfully', post: JSON.stringify(existingJob) },
      { message: 'Post fetched successfully', post: getAllPosts },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error in POST /api/posts:', error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}
