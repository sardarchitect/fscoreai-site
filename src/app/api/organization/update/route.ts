import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db'; // Drizzle ORM instance
import { organizationTable } from '@/src/lib/schema/organization'; // Drizzle schema for the organization table
import { and, eq } from 'drizzle-orm/expressions';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { organization } from '@/src/types/user';
import { console } from 'inspector';
import { User } from 'next-auth';
import { checkSessionUserForAdmin } from '@/src/lib/actions/user';


/**
 * Update the organization in the database.
 */
async function updateOrganization({
  sessionUser,
  trx,
  orgId,
  name,
  contact,
  // currentPlan,
  shortDescription,
  billingHistory,
}: {
  sessionUser: User;
  trx: any;
  orgId: string;
  name?: string;
  contact: Record<string, any>;
  shortDescription?: string;
  billingHistory?: Record<string, any>;
}) {
  const existingOrganization = await trx
    .select({
      name: organizationTable.name,
      contact: organizationTable.contact,
      shortDescription: organizationTable.shortDescription,
      billingHistory: organizationTable.billingHistory,
      updatedAt: new Date(), // Update the timestamp
    })
    .from(organizationTable)
    .where(eq(organizationTable.orgId, orgId))

  if (existingOrganization.length === 0 ) {
    return NextResponse.json({ error: 'Organization not found' }, { status: 404 });
  }

  const updatedOrganization = await trx
    .update(organizationTable)
    .set({
      name: name || existingOrganization[0].name,
      contact: contact || existingOrganization[0].contact,
      shortDescription: shortDescription || existingOrganization[0].shortDescription,
      billingHistory: billingHistory || existingOrganization[0].billingHistory,
      updatedAt: new Date(), // Update the timestamp
    })
    .where(eq(organizationTable.orgId, orgId))
    .returning();

  return NextResponse.json({ message: 'Organization updated successfully', organization: updatedOrganization }, { status: 200 });
}

/**
 * PUT: Handles organization updates.
 */
export async function PUT(request: NextRequest) {
  // Check authentication
  const authResponse = await hasAuth();
  if (!(authResponse.ok === true)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const sessionUser = await authResponse.json();

  try {
    const body: organization = await request.json();

    const { name, contact, shortDescription, billingHistory } = body;

    const response = await db.transaction(async (trx) => {
      // Check if session user matches the organization
      const orgData = await checkSessionUserForAdmin(trx, sessionUser.user);

      // Update organization
      return await updateOrganization({
        sessionUser: sessionUser.user,
        trx,
        orgId: orgData.orgId,
        name,
        
        contact,
        shortDescription,
        billingHistory,
      });
    });

    // Return response
    return response || NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } catch (error: any) {
    console.error('Error in PUT /api/organizations:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
