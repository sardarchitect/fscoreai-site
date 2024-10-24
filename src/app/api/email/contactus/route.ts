import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const fromEmail = process.env.FROM_EMAIL;
  const body = await req.json();
  const { name, email, company_name, job_title, short_description } = body; 

  try {
    const data = await resend.emails.send({
      from: `noreply@fscore.ai`,
      to: `asingh@fscore.ai`,
      subject: 'Contact Form Data',
      html: `<h1>User Data</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company Name:</strong> ${company_name || 'N/A'}</p>
        <p><strong>Job Title:</strong> ${job_title || 'N/A'}</p>
        <p><strong>Short Description:</strong> ${short_description}</p>`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error)
  }
}