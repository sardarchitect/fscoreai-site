import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db'; // Drizzle ORM instance
import { organizationTable } from '@/src/lib/schema/organization'; // Drizzle schema for the organization table
import { eq } from 'drizzle-orm/expressions';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { handleErrorResponse } from '@/src/types/api_response';
import { updateUserRole } from '@/src/lib/actions/user';


async function createOrganization({
  trx,
  sessionUser,
  name,
  email,
  contact,
  shortDescription,
  billingHistory,
}: {
  trx: any;
  sessionUser: any;
  name?: string;
  email: string;
  contact?: Record<string, any>;
  shortDescription?: string;
  billingHistory?: Record<string, any>;
}) {
      // Check if the organization already exists
      const existingOrganization = await trx
        .select()
        .from(organizationTable)
        .where(eq(organizationTable.email, email));

      if (existingOrganization.length > 0) {
        throw new Error('Organization already exists')
      }
      // Insert new organization into the database within the transaction
      const newOrganization = await trx
        .insert(organizationTable)
        .values({
          name,
          email: email ? email : sessionUser.user.email,
          contact,
          adminUserId: sessionUser.user.id,
          shortDescription: shortDescription || null,
          billingHistory: billingHistory || null,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        .returning();

        if (newOrganization.length > 0 && newOrganization[0].orgId) {
          // Update the role of the admin user and add orgId
          await updateUserRole({userId: newOrganization[0].adminUserId, email, updatedRole: "admin", trx, orgId: newOrganization[0].orgId});
        }
      return { data: newOrganization };
}

/**
 * POST: Handles new organization registration.
 */
export async function POST(request: Request) {
  // Authentication check
  const authResponse = await hasAuth();
  if (!(authResponse.ok === true)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const sessionUser = await authResponse.json();
  
  try {
    const {
      name,
      email,
      contact,
      shortDescription,
      billingHistory,
    } = await request.json();

// Start transaction
return await db.transaction(async (trx) => {

    const response = await createOrganization({
      trx,
      sessionUser,
      name,
      email,
      contact,
      shortDescription,
      billingHistory,
    });


    return NextResponse.json(
      { message: 'Organization created successfully', organization: response.data },
      { status: 201 }
    );
  })

  } catch (error: any) {
    console.error('Error in POST /api/organizations:', error);
    return handleErrorResponse(error);
  }
}
