import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db'; // Drizzle ORM instance
import { organizationTable } from '@/src/lib/schema/organization'; // Drizzle schema for the organization table
import { and, eq, or } from 'drizzle-orm/expressions';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { handleErrorResponse } from '@/src/types/api_response';
import { usersTable } from '@/src/lib/schema/user';


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

      let condition;

      // get orgId if user is manager
      if (sessionUser.user.role === 'manager') {
        const userData = await trx
          .select({ orgId: usersTable.orgId })
          .from(usersTable)
          .where(eq(usersTable.id, sessionUser.user.id))

        condition = eq(organizationTable.orgId, userData[0].orgId);

      } else if (sessionUser.user.role === 'admin') {
        condition = eq(organizationTable.adminUserId, sessionUser.user.id)
      } else{
        throw new Error('User not authorized')
      }
      // Check if the organization already exists
      const Organization = await trx
        .select({
          name: organizationTable.name,
          contact: organizationTable.contact,
          currentPlan: organizationTable.currentPlan,
          shortDescription: organizationTable.shortDescription,
          managers: organizationTable.managers,
          members: organizationTable.members,
        })
        .from(organizationTable)
        .where(condition);

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
    console.error('Error in POST /api/organization/read/dashboard:', error);
    return handleErrorResponse(error);
  }
}
