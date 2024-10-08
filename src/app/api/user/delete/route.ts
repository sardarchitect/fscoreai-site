import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/src/lib/db';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';


export async function DELETE(req: NextRequest) {

  const authResponse = await hasAuth(req);
  if (!(authResponse.ok === true)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });  ; // Return the unauthorized response if exists

  try {
    const { id, email } = await req.json();

    const newUserCheckQuery = 'SELECT id, name FROM users WHERE email = $1';
    const newUserCheckResult = await query(newUserCheckQuery, [email]);

    // // Check if the user exists 
    // const newUserCheckQuery = 'SELECT id FROM users WHERE id = $1 AND email = $2';
    // const newUserCheckResult = await query(newUserCheckQuery, [id, email]);

    if (newUserCheckResult.rows.length === 0) {
      throw new Error('user not found ');
    }
    // Remove the user
    // const removeUserQuery = `
    //   DELETE FROM users
    //   WHERE id = $1 AND email = $2
    // `;
    // await query(removeUserQuery, [id, email]);
    const removeUserQuery = `DELETE FROM users WHERE email = $1`;
    const removeUserQueryResult = await query(removeUserQuery, [email]);

    // Commit transaction
    await query('COMMIT');

    return NextResponse.json({ message: 'user removed successfully' }, { status: 200 });
  }
  catch (error) {
    await query('ROLLBACK');
    console.error('Catch Error', error);

    if (error instanceof Error) {
      if (error.message.includes('not found')) {
        return NextResponse.json({ error: error.message }, { status: 404 });
      }
      if (error.message) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    }

    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  } finally {

  }
}