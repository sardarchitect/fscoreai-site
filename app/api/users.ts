
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { sql } from '@vercel/postgres'; 

// interface User {
//   name: string;
//   email: string;
//   company_name: string;
//   job_title: string;
//   short_description: string;
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { name, email, company_name, job_title, short_description }: User = req.body;

//     // Simple validation
//     if (!name || !email || !short_description) {
//       return res.status(400).json({ message: 'Name, email, and description are required.' });
//     }

//     try {
//       // Insert data into the database
//       const result = await sql`INSERT INTO users (name, email, company_name, job_title, short_description) VALUES (${name}, ${email}, ${company_name}, ${job_title}, ${short_description}) RETURNING *`;

//       return res.status(201).json({ message: 'User data added successfully', user: result.rows[0] });
//     } catch (error) {
//       console.error('Error adding user data:', error);
//       return res.status(500).json({ message: 'Failed to add user data' });
//     }
//   } else {
//     // Handle any other HTTP method
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
