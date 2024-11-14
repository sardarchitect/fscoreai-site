import { NextRequest, NextResponse } from 'next/server';
import { db, query } from '@/src/lib/db';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { eq } from 'drizzle-orm';
import { usersTable } from '@/src/lib/schema/user';


export async function DELETE(req: NextRequest) {

  const authResponse = await hasAuth();
  if (!(authResponse.ok === true)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });  ; // Return the unauthorized response if exists
  const {user} = await authResponse.json()
  
  try {
   
    const deletedUser = await deleteUserById(user.id);

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
}


// Function to delete a user by email
async function deleteUserById (id: string){

    try {
        const deletedUser = await db.delete(usersTable)
            .where(eq(usersTable.id, id)) 
            .returning({email: usersTable.email})

        console.log('Deleted user:', deletedUser);
        return deletedUser
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};
