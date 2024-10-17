import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { roles } from '@/src/lib/utils/data';
import { authOptions } from '@/src/app/api/auth/[...nextauth]/options';

export async function hasAuth(req: Request) {
  // Retrieve the session
  const session = await getServerSession({ req, ...authOptions });

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

