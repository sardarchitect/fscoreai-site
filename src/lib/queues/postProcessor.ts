// src/lib/queues/PostProcessor.ts
import { Worker } from 'bullmq';
import { db } from '@/src/lib/db';
import { postsTable, postLikesTable, postViewsTable } from '@/src/lib/schema/forem';
import { eq, and } from 'drizzle-orm/expressions';
import { redis } from '@/src/lib/redis';
import { sql } from 'drizzle-orm';

let worker: Worker | null = null;

const startWorker = () => {

  if (worker) {
    // Worker is already running
    // if we make changes in worker file it will reflect only after restart the server
    console.log('Worker is already running.');
    return;
  }

  worker = new Worker(
    'likePostQueue',
    async (job) => {

      if (!job) {
        throw new Error('Job is undefined');
      }
      const { postId, userId } = job.data;

      // Handle jobs based on queue name
      if (job.queueName === 'likePostQueue') {
        await handleLikePostJob(postId, userId);
      } else if (job.queueName === 'viewPostQueue') {
        await handleViewPostJob(postId, userId);
      }
    },
    {
      connection: {
        host: '127.0.0.1',
        port: 6379
      },
      removeOnFail: { count: 0 },
      removeOnComplete: { count: 0 },
      concurrency: 5, // Process 5 jobs in parallel
    }
  );

  worker.on('completed', (job) => {
    console.log(`Job completed: ${job}`);
  });

  worker.on('failed', (job, err) => {
    console.error(`Job failed with error ${err.message}`);
  });

  console.log('Worker started');
};
export default startWorker;

// Function to stop the worker
export const stopWorker = () => {
  if (worker) {
    worker.close();
    worker = null;
    console.log('Worker stopped');
  }
};


async function handleLikePostJob(postId: string, userId: string) {

  try {
    return await db.transaction(async (trx) => {
    // Check if the user has already liked the post
    const existingLike = await trx
      .select()
      .from(postLikesTable)
      .where(and(eq(postLikesTable.postId, postId), eq(postLikesTable.userId, userId)))
      .limit(1);
    if (existingLike.length === 0) {
      // If the user hasn't liked the post, add the like and increment the count
      await trx.insert(postLikesTable).values({ postId, userId });
      await trx
        .update(postsTable)
        .set({ likes: sql`${postsTable.likes} + 1` })
        .where(eq(postsTable.id, postId));

      console.log(`User ${userId} liked post ${postId}`);
    } else {
      // If the user has already liked the post, remove the like and decrement the count
      await trx
        .delete(postLikesTable)
        .where(and(eq(postLikesTable.postId, postId), eq(postLikesTable.userId, userId)));
      await trx
        .update(postsTable)
        .set({ likes: sql`${postsTable.likes} - 1` })
        .where(eq(postsTable.id, postId));

      console.log(`User ${userId} unliked post ${postId}`);
    }
  })
  } catch (error) {
    console.error('Error processing like/unlike job:', error);
  }
}


async function handleViewPostJob(postId: string, userId: string) {
  try {
    return await db.transaction(async (trx) => {
    // Check if the user has already viewd the post
    const existingView = await trx
      .select()
      .from(postViewsTable)
      .where(and(eq(postViewsTable.postId, postId), eq(postViewsTable.userId, userId)))
      .limit(1);
    if (existingView.length === 0) {
      // If the user hasn't viewd the post, add the view and increment the count
      await trx.insert(postViewsTable).values({ postId, userId });
      await trx
        .update(postsTable)
        .set({ views: sql`${postsTable.views} + 1` })
        .where(eq(postsTable.id, postId));

      console.log(`User ${userId} viewd post ${postId}`);
    } else{
      console.log("Allready viewed the post")
    }
  })
  } catch (error) {
    console.error('Error updating view job:', error);
  }
}