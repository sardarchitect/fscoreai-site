// src/lib/queues/likePostQueue.ts
import { Queue } from 'bullmq';
import { redis } from '@/src/lib/redis';

export const likePostQueue = new Queue('likePostQueue', {
  connection: {
    host: '127.0.0.1',
    port: 6379
  },
  
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