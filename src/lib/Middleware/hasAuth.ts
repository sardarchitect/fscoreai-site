import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { roles } from '@/src/lib/utils/data';
import { authOptions } from '@/src/app/api/auth/[...nextauth]/options';
import { NextAuthOptions } from 'next-auth';

export async function hasAuth() {
  // Retrieve the session
  // const session = await getServerSession({ req, ...authOptions });
  const session = await getServerSession(authOptions as NextAuthOptions,);

  // Check if the user is authenticated
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthenticated'}, { status: 401 });
  }
  // if (!session || !roles.includes(session?.user.role)) {
  //   return NextResponse.json({ error: 'Unauthorized'}, { status: 401 });
  // }
  // return NextResponse.json({ message: 'User authorized successfully', user: session.user}, { status: 200 });

  return NextResponse.json({ message: 'User authorized successfully', user: session.user}, { status: 200 });

  
}

