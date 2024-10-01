// import { sql } from '@vercel/postgres';
// import { NextRequest, NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL

// interface User {
//   name: string;
//   email: string;
//   company_name?: string;
//   job_title?: string;
//   short_description: string;
// }

// export async function POST(req: NextRequest) {
//   if (req.method === 'POST') {
//     const body: User = await req.json();

//     const { name, email, company_name, job_title, short_description } = body; 
//     // Simple validation
//     if (!name || !email || !short_description) {
//       return NextResponse.json({ message: 'Name, email, and description are required.' }, { status: 400 });
//     }

//     try {
//       // // Insert data into the database
//       // const result = await sql`INSERT INTO users (name, email, company_name, job_title, short_description) VALUES (${name}, ${email}, ${company_name}, ${job_title}, ${short_description}) RETURNING *`;

//       // SEND EMAIL THROUGH RESEND
//       const emailResponse = await resend.emails.send({
//         from: fromEmail,
//         to: 'asingh@fscore.ai',
//         subject: "New User Data Submission",
//         html: `
//         <p>hiiiii</p>
//       `,
//       });

//       if (emailResponse.error) {
//         console.error('Error sending email:', emailResponse.error);
//         return NextResponse.json({ message: 'User data added but failed to send email.' }, { status: 500 });
//       }

//       return NextResponse.json({ message: 'User data added successfully', user: result.rows[0] }, { status: 201 });
//     } catch (error) {
//       console.error('Error adding user data:', error);
//       return NextResponse.json({ message: 'Failed to add user data' }, { status: 500 });
//     }
//   }

//   return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
// }

