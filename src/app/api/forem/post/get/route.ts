import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { postsTable } from '@/src/lib/schema/forem';
import { eq } from 'drizzle-orm';

export async function GET(request: Request) {
  // Authentication check
  const authResponse = await hasAuth();
  if (!authResponse.ok) {
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  }
  const sessionUser = await authResponse.json();

  try {
    // Insert new post into the database
    const getAllPosts = await db
      .select()
      .from(postsTable)
      .where(eq(postsTable.ownerId, sessionUser.user.id))
      

    return NextResponse.json(
      { message: 'Post fetched successfully', post: getAllPosts },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error in POST /api/posts:', error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}
