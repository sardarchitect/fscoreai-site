import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { query } from '@/src/lib/db';
import { getToken } from 'next-auth/jwt';

// SQL statement to create the users table if it does not exist
const createUsersTable = `
  CREATE EXTENSION IF NOT EXISTS pgcrypto;  -- Ensure the pgcrypto extension is enabled for gen_random_uuid()
  
  CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),   
      name VARCHAR(100) NOT NULL,                       
      email VARCHAR(255) UNIQUE NOT NULL,             
      password VARCHAR(255) NOT NULL,                  
      role VARCHAR(20) NULL CHECK (role IN ('admin', 'manager', 'member')),  
      company_name VARCHAR(255) NULL,                  
      job_title VARCHAR(100) NULL,                      
      short_description TEXT NULL,                      
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP  
  );
`;

async function ensureUsersTableExists() {
  
  try {
    // Check if the users table exists
    const checkTableQuery = `
      SELECT EXISTS (
        SELECT 1 
        FROM information_schema.tables 
        WHERE table_name = 'users'
      );
    `;
    const result = await query(checkTableQuery);
    
    const tableExists = result.rows[0].exists; 

    // If the table does not exist, create it
    if (!tableExists) {
      await query(createUsersTable);
      console.log('Users table created successfully');
    } else {
      console.log('Users table already exists');
    }
    return;
  } catch (error) {
    console.error('Error ensuring users table exists:', error);
    throw new Error('Could not ensure users table exists');
  }
}

/**
 * POST: Handles new user registration.
 */

export async function POST(request: NextRequest) {
  const token = await getToken({ req: request });
  console.log(token,'majsf')
  try {
    // Ensure the users table exists before handling the request
    await ensureUsersTableExists();

    const { name, email, password } = await request.json();

    // Check if the user already exists
    
    const userCheckQuery = 'SELECT id FROM users WHERE email = $1';
    const userCheckResult = await query(userCheckQuery, [email]);
    if (userCheckResult.rows.length > 0) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Insert the new user into the database
  
    const userInsertQuery = 'INSERT INTO users(name, email, password) VALUES($1, $2, $3)';
    await query(userInsertQuery, [name, email, hashedPassword]);
    

    //send verification email

    // make error handling constructor and use throw keyword...
  
    return NextResponse.json({ message: 'User created successfully' }, { status: 200 });

  } catch (error: any) {
    console.error('Error in POST /api/users:', error);  // Log the error for debugging
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
