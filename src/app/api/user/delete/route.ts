import { NextRequest, NextResponse } from 'next/server';
import { db, query } from '@/src/lib/db';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { eq } from 'drizzle-orm';
import { usersTable } from '@/src/lib/schema/user';


export async function DELETE(req: NextRequest) {

  const authResponse = await hasAuth(req);
  if (!(authResponse.ok === true)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });  ; // Return the unauthorized response if exists
  const {user} = await authResponse.json()
  
  try {
    const { email } = await req.json();

    if (!email) {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }
    const deletedUser = await deleteUserByEmail(email);

    // If no user is deleted (i.e., user doesn't exist)
    if (!deletedUser.length) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Return success response
    return NextResponse.json({ message: 'User deleted successfully', deletedUser }, { status: 200 });

} catch (error) {
    // Catch any errors and return a 500 response
    console.error('Error deleting user:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
}






  // try {
  //   const { id, email } = await req.json();

  //   const newUserCheckQuery = 'SELECT id, name FROM users WHERE email = $1';
  //   const newUserCheckResult = await query(newUserCheckQuery, [email]);

  //   // // Check if the user exists 
  //   // const newUserCheckQuery = 'SELECT id FROM users WHERE id = $1 AND email = $2';
  //   // const newUserCheckResult = await query(newUserCheckQuery, [id, email]);

  //   if (newUserCheckResult.rows.length === 0) {
  //     throw new Error('user not found ');
  //   }
  //   // Remove the user
  //   // const removeUserQuery = `
  //   //   DELETE FROM users
  //   //   WHERE id = $1 AND email = $2
  //   // `;
  //   // await query(removeUserQuery, [id, email]);
  //   const removeUserQuery = `DELETE FROM users WHERE email = $1`;
  //   const removeUserQueryResult = await query(removeUserQuery, [email]);

  //   // Commit transaction
  //   await query('COMMIT');

  //   return NextResponse.json({ message: 'user removed successfully' }, { status: 200 });
  // }
  // catch (error) {
  //   await query('ROLLBACK');
  //   console.error('Catch Error', error);

  //   if (error instanceof Error) {
  //     if (error.message.includes('not found')) {
  //       return NextResponse.json({ error: error.message }, { status: 404 });
  //     }
  //     if (error.message) {
  //       return NextResponse.json({ error: error.message }, { status: 500 });
  //     }
  //   }

  //   return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  // } finally {

  // }
}


// Function to delete a user by email
async function deleteUserByEmail (email: string){

    try {
        const deletedUser = await db.delete(usersTable)
            .where(eq(usersTable.email, email)) 
            .returning()

        console.log('Deleted user:', deletedUser);
        return deletedUser
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};
