// pages/api/sendEmail.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_B7hqekJj_BNaJGKBky8SvNr68gQwQfn8Z');

export async function POST(req: Request, res: Response) {

  try {
    const { data, error } = await resend.emails.send({
      from: 'nigamdhillo3021@gmail.com',
      to: 'nigamworkmail@gmail.com',
      subject: "Test Email",
      html: `
      <p> Hello World </p>
      `
    });

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 });

  }
}