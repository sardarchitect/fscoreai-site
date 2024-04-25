import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

interface RequestBody {
  name: string;
  email: string;
  company_name: string;
  job_title: string;
  short_description: string;
  Agree: boolean;
}
export async function GET() {
  try{
    const getQuery = `SELECT * FROM Users`;
    const result = await sql.query(getQuery)
    return NextResponse.json({ result }, { status: 200 });
  }
  catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    // Creating the Users table if it doesn't exist
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS Users (
        Name VARCHAR(255),
        Email VARCHAR(255),
        CompanyName VARCHAR(255),
        JobTitle VARCHAR(255),
        ShortDescription TEXT,
        Agree BOOLEAN
      )
    `;
    await sql.query(createTableQuery);
    

    // Check if request.body is null
    if (request.body === null) {
      throw new Error("Request body is null");
    }
    // Extracting data from the request body
    const {
      name,
      email,
      company_name,
      job_title,
      short_description,
      Agree,
    }: RequestBody = await request.json() as RequestBody;
    
    // Inserting data into the Users table
    const insertQuery = `
      INSERT INTO Users (name, email, CompanyName, JobTitle, ShortDescription, Agree)
      VALUES ($1, $2, $3, $4, $5, $6)
      `;
    const result = await sql.query(insertQuery, [
      name,
      email,
      company_name,
      job_title,
      short_description,
      Agree,
    ]);
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}


// export async function DELETE(request: Request) {
//   try {
//     // Extract the identifier from the request body or query parameters
//     const emailToDelete = request.body.email; // Assuming email is used as the identifier

//     // Construct the DELETE query
//     const deleteQuery = `
//       DELETE FROM Users
//       WHERE email = $1
//     `;

//     // Execute the DELETE query
//     const result = await sql.query(deleteQuery, [emailToDelete]);

//     // Check if any rows were deleted
//     if (result.rowCount === 1) {
//       return NextResponse.json({ message: 'Row deleted successfully' }, { status: 200 });
//     } else {
//       return NextResponse.json({ message: 'Row not found or already deleted' }, { status: 404 });
//     }
//   } catch (error) {
//     // Handle errors
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// export async function DELETE(request: Request) {
//   try {
//     // Construct the DELETE query to remove all rows from the Users table
//     const deleteQuery = `
//       DELETE FROM Users
//     `;

//     // Execute the DELETE query
//     const result = await sql.query(deleteQuery);

//     // Check if any rows were deleted
//     if (result.rowCount > 0) {
//       return NextResponse.json({ message: 'All rows deleted successfully' }, { status: 200 });
//     } else {
//       return NextResponse.json({ message: 'No rows found to delete' }, { status: 404 });
//     }
//   } catch (error) {
//     // Handle errors
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
