import { NextResponse } from 'next/server';
import { db } from '@/src/lib/db';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { updateUser } from '@/src/lib/helpers/updateUser';
import { usersTable } from '@/src/lib/schema/user';
import { count, eq } from 'drizzle-orm';

export async function PUT(req: Request) {
  
  try {
    // Retrieve the session
    const authResponse = await hasAuth();
    if (authResponse.ok === false) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { user } = await authResponse.json();
    let updateResult: any;

    // if (user.role !== 'user') {
    //   return NextResponse.json({ error: `User not allowed` }, { status: 404 });
    // }
    // Parse the request payload
    const userData = await req.json();
    const { name, email } = await userData;

    // Start the transaction
    await db.transaction(async (trx) => {
      // Check if the user exists
      const result = await trx
        .select({ count: count() })
        .from(usersTable)
        .where(eq(usersTable.id, user.id))

      if (result[0].count !== 1) {
        return NextResponse.json({ error: result[0].count, message: 'User not found' }, { status: 404 });
      }

      // Check permissions and update user using the updateUser helper function
      updateResult = await updateUser({
        trx,
        id: user.id,
        role: user.role,
        data: {
          name, email
        },
        updaterId: user.id,
        updaterRole: user.role,
      });

      // Commit transaction if successful
      if (!updateResult) {
        throw new Error('User update failed');
      }

    });
    
    return NextResponse.json({ message: 'User updated successfully', user: updateResult?.user }, { status: 200 });

    // return NextResponse.json(
    //   { message: 'User updated. Please sign in again.' },
    //   { status: 200, headers: { 'Clear-Site-Data': '"cookies"' } }
    // );
  } catch (error) {
    console.error('Catch Error', error);

    if (error instanceof Error && error.message) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
