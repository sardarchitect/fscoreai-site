// src/app/api/likePost/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';

export async function POST(request: NextRequest) {
  const authResponse = await hasAuth();
  if (!authResponse.ok) {
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  }
  const sessionUser = await authResponse.json();
  try {
    const { postId } = await request.json();
    const { id: userId }= sessionUser.user;

    if (!postId) {
      return NextResponse.json({ error: 'Post ID are required' }, { status: 400 });
    }

    return NextResponse.json({ message: `added to queue` }, { status: 200 });
  } catch (error) {
    console.error('Error in POST /api/likePost:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
