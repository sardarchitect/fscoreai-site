// import { Resend } from 'resend';

// const resend = new Resend('re_HosL5q6M_7byKdYYBozEKFQe5WJ3SEuea');

// interface RequestBody {
//   name: string;
//   email: string;
//   company_name: string;
//   job_title: string;
//   short_description: string;
//   Agree: boolean;
// }

// export async function POST(req: Request, res: Response) {
//   const data: RequestBody = req.body;

//   if (!data.name || !data.email || !data.short_description || !data.Agree) {
//     return res.status(400).json({ error: 'Please fill in all required fields.' });
//   }
//   try {
//     const { data, error } = await resend.emails.send({
//       from: 'nigamdhillo3021@gmail.com',
//       to:'ndhillon@fscore.ai',
//       subject: "Test Email",
//       html: `
//       Name: ${data.name}
//       Email: ${data.email}
//       Company Name: ${data.company_name}
//       Job Title: ${data.job_title}
//       Short Description: ${data.short_description}
//     `
//     });


//   } catch (error) {
//     return Response.json({ error }, { status: 500 });

//   }
// }