import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { roles } from '@/src/lib/utils/data';
import { authOptions } from '@/src/app/api/auth/[...nextauth]/options';
import { NextAuthOptions } from 'next-auth';

export async function hasAuth() {
  // Retrieve the session
  const session = await getServerSession(authOptions as NextAuthOptions,);

  // Check if the user is authenticated
  console.log(session?.user)
 
  if (!session) {
    return NextResponse.json({ error: 'Unauthenticated',}, { status: 401 });
  }

  return NextResponse.json({ message: 'User authentication successfully', user: session.user}, { status: 200 });

  
}

