import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { format } from "date-fns";

interface RequestBody {
  name: string;
  email: string;
  company_name: string;
  job_title: string;
  short_description: string;
  Agree: boolean;
}

export async function GET(request) {
  try {
    const result = await sql.query(`select * from Users`)

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}


export async function POST(request: Request) {
  try {
    if (request.body === null) {
      throw new Error("Request body is null");
    }

    const {
      name,
      email,
      company_name,
      job_title,
      short_description,
      Agree,
    }: RequestBody = await request.json() as RequestBody;

    // Format the current date and time in a more readable format
    const gmt_datetime = format(new Date(), "dd MMMM yyyy 'at' HH:mm:ss 'UTC'");

    const insertQuery = `
      INSERT INTO Users (Name, Email, CompanyName, JobTitle, ShortDescription, Agree, GMTDateTime)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
    const result = await sql.query(insertQuery, [
      name,
      email,
      company_name,
      job_title,
      short_description,
      Agree,
      gmt_datetime,
    ]);

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
