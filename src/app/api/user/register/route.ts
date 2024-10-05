import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { query } from '@/src/lib/db';




export async function POST(request: NextRequest, res: NextResponse) {
  try {
    const reqBody = await request.json()
    const {  email, password } = reqBody

    console.log(reqBody);
    // Check if the user already exists
    const userCheck = await query('SELECT id FROM users WHERE email = $1', [email]);
    if (userCheck.rows.length > 0) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    try {
      const result = await query(
        'INSERT INTO users( email, password) VALUES($1, $2)',
        [ email, hashedPassword]
      );

      return NextResponse.json({ message: 'User created successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error saving user:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

    //send verification email

    // make error handling constructor and use throw keyword...
    // return NextResponse.json({
    //     message: "User created successfully",
    //     success: true,
    // })




  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })

  }
}