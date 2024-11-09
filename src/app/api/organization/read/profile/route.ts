import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db'; // Drizzle ORM instance
import { organizationTable } from '@/src/lib/schema/organization'; // Drizzle schema for the organization table
import { and, eq } from 'drizzle-orm/expressions';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { handleErrorResponse } from '@/src/types/api_response';


/**
 * GET: Handles get organization.
 */
export async function GET(request: Request) {
  // Authentication check
  const authResponse = await hasAuth();
  if (!(authResponse.ok === true)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const sessionUser = await authResponse.json();

  try {

    return await db.transaction(async (trx) => {
      // Check if the organization already exists
      const Organization = await trx
        .select({
          name: organizationTable.name, 
          contact: organizationTable.contact, 
          currentPlan: organizationTable.currentPlan,
          email: organizationTable.email,
          shortDescription: organizationTable.shortDescription,
        })
        .from(organizationTable)
        .where(and(eq(organizationTable.email, sessionUser.user.email), eq(organizationTable.adminUserId, sessionUser.user.id)));

      if (Organization.length === 0) {
        throw new Error('Organization not exists')
      }

      return NextResponse.json(
        { message: `Organization get successfully`, Organization: Organization[0] },
        // {Organization: Organization[0]},
        { status: 201 }
      );
    })

  } catch (error: any) {
    console.error('Error in POST /api/organization/read/profile:', error);
    return handleErrorResponse(error);
  }
}
