import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const fromEmail = process.env.FROM_EMAIL;
  const { email } = await req.json(); 

  try {
    const data = await resend.emails.send({
      from: `noreply@fscore.ai`,
      to: `asingh@fscore.ai`,
      subject: 'Subscription Request',
      html: `<h1>Request to subscribe</h1>
        <p><strong>Email:</strong> ${email}</p>`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error)
  }
}