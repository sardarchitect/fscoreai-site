import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db'; // Drizzle ORM instance
import { organizationTable } from '@/src/lib/schema/organization'; // Drizzle schema for the organization table
import { eq } from 'drizzle-orm/expressions';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { handleErrorResponse } from '@/src/types/api_response';
import { json } from 'stream/consumers';


async function getOrganization({
  trx,
  email,
}: {
  trx: any;
  email: string;
}) {
  // Check if the organization already exists
  const Organization = await trx
    .select()
    .from(organizationTable)
    .where(eq(organizationTable.email, email));

  if (Organization.length === 0) {
    throw new Error('Organization not exists')
  }
  return { data: Organization };
}

/**
 * POST: Handles new organization registration.
 */
export async function GET(request: Request) {
  // Authentication check
  const authResponse = await hasAuth();
  if (!(authResponse.ok === true)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const sessionUser = await authResponse.json();

  try {

    // const {
    //   email
    // } = await request.json();

    return await db.transaction(async (trx) => {


      // Check if the organization already exists
      const Organization = await trx
        .select()
        .from(organizationTable)
        .where(eq(organizationTable.email, "manu@gmail.com"));

      if (Organization.length === 0) {
        throw new Error('Organization not exists')
      }

      return NextResponse.json(
        { message: `${JSON.stringify(Organization[0].managers)} Organization get successfully` },
        { status: 201 }
      );
    })

  } catch (error: any) {
    console.error('Error in POST /api/organizations:', error);
    return handleErrorResponse(error);
  }
}
