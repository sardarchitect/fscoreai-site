import { NextResponse } from 'next/server';
import { db } from '@/src/lib/db';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { updateUser } from '@/src/lib/helpers/updateUser';
import { usersTable } from '@/src/lib/schema/user';
import { count, eq } from 'drizzle-orm';

export async function PUT(req: Request) {
  // Retrieve the session
  const authResponse = await hasAuth();
  if (!(authResponse.ok === true)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { user } = await authResponse.json();

  
  if (user.role !== 'user') {
    return NextResponse.json({ error: 'User not allowed' }, { status: 404 });
  }

  try {
    // Parse the request payload
    const { updatedUser } = await req.json();

    // Check if the user exists
    const result = await db
      .select({ count: count() })
      .from(usersTable)
      .where(eq(usersTable.id, user.id))

    if (result[0].count !== 1) {
      return NextResponse.json({ error: result[0].count, message: 'User not found' }, { status: 404 });
    }

    // Start the transaction
    await db.transaction(async (trx) => {
      // Check permissions and update user using the updateUser helper function
      const updateResult = await updateUser({
        trx,
        id: updatedUser.id,
        role: updatedUser.role,
        data: updatedUser,
        updaterId: user.id,
        updaterRole: user.role,
      });

      // Commit transaction if successful
      if (!updateResult) {
        throw new Error('User update failed');
      }
    });

    return NextResponse.json({ message: 'User updated successfully', user: updatedUser }, { status: 200 });
  } catch (error) {
    console.error('Catch Error', error);

    if (error instanceof Error && error.message) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
