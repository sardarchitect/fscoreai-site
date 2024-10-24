// src/app/api/likePost/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { likePostQueue, viewPostQueue } from '@/src/lib/queues/postQueue';
import startWorker from '@/src/lib/queues/postProcessor';

export async function POST(request: NextRequest) {
  const authResponse = await hasAuth();
  if (!authResponse.ok) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const sessionUser = await authResponse.json();

  try {
    const { postId } = await request.json();
    const { id: userId }= sessionUser.user;

    if (!postId) {
      return NextResponse.json({ error: 'Post ID are required' }, { status: 400 });
    }
    await startWorker()

    await viewPostQueue.add('view-post', { postId, userId });
    // await likePostQueue.add('like-post', { postId, userId });

    return NextResponse.json({ message: `added to queue` }, { status: 200 });
  } catch (error) {
    console.error('Error in POST /api/likePost:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
