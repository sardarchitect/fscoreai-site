// src/lib/redis.ts
// import Redis from 'ioredis';

// export const redis = new Redis({connectionName: process.env.REDIS_URL}); // Use your Redis URL


// export const redis = new Redis({
//     host: '127.0.0.1',
//     port: 6379
//   }); // Use your Redis URL


import { createClient } from 'redis';

export const redis = createClient();

redis.on('error', err => console.log('Redis Client Error', err));

// await client.connect();
