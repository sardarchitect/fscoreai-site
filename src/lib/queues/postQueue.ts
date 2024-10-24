// src/lib/queues/likePostQueue.ts
import { Queue } from 'bullmq';
// import { redis } from '@/src/lib/redis';

const radis = {
  host: '127.0.0.1',
  port: 6379
}
export const likePostQueue = new Queue('likePostQueue', {
  connection: radis
});

export const viewPostQueue = new Queue('viewPostQueue', {
  connection: radis
});

// docker run --name my-redis -d -p 6379:6379 redis
// Function to clean the queue
async function cleanQueue() {
  // await likePostQueue.setGlobalConcurrency(4);

  // await likePostQueue.drain();
  // await likePostQueue.obliterate();

  console.log('Queue cleaned');
}

// cleanQueue();