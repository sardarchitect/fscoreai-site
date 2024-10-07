import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/src/lib/db';
import { updateUser } from '@/src/lib/actions/user';


export async function PUT(req: NextRequest) {

  try {
    // Start transaction
    await query('BEGIN');

    const { updatedUser, id , email} = await req.json();

    // Check if the user exists 
    const newUserCheckQuery = 'SELECT id FROM users WHERE email = $1';
    const newUserCheckResult = await query(newUserCheckQuery, [email]);

    if (newUserCheckResult.rows.length === 0) {
      throw new Error('user not found ');
    }

    // Update the user to change the user 
    await updateUser(updatedUser, id, email)

    await query('COMMIT');

    return NextResponse.json({ message: 'user updated successfully' }, { status: 200 });
  }


  catch (error) {
    await query('ROLLBACK');
    console.error('Catch Error', error);

    if (error instanceof Error) {
      if (error.message.includes('not found')) {
        return NextResponse.json({ error: error.message }, { status: 404 });
      }
      if (error.message.includes('already exists')) {
        return NextResponse.json({ error: error.message }, { status: 409 });
      }
      if (error.message) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    }

    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  } finally {

  }
}

