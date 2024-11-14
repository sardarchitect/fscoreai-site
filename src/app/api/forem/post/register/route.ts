import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { postsTable } from '@/src/lib/schema/forem';
import { generateUniqueSlug } from '@/src/lib/actions/posts';

export async function POST(request: Request) {
  // Authentication check
  const authResponse = await hasAuth();
  if (!authResponse.ok) {
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  }
  const sessionUser = await authResponse.json();

  try {
    const {
      title,
      content,
      category,
    } = await request.json();

    // Generate a unique slug based on the title
    const slug = await generateUniqueSlug(title);

    // Insert new post into the database
    const newPost = await db
      .insert(postsTable)
      .values({
        title,
        content,
        category,
        ownerId: sessionUser.user.id,
        slug
      })
      .returning();

    return NextResponse.json(
      { message: 'Post created successfully', post: newPost },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error in POST /api/posts:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
