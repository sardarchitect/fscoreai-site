import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db'; // Drizzle ORM instance
import { organizationTable } from '@/src/lib/schema/organization'; // Drizzle schema for the organization table
import { and, eq } from 'drizzle-orm/expressions';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { Managers, Members, organization } from '@/src/types/user';
import { updateMembersAndManagers } from '@/src/lib/actions/user';
import { console } from 'inspector';
import { User } from 'next-auth';
import { usersTable } from '@/src/lib/schema/user';

/**
 * Check if the session user matches the organization.
 */
async function checkSessionUser(trx: any, sessionUser: User) {

  const result = await trx
    .select({ orgId: usersTable.orgId, role: usersTable.role })
    .from(usersTable)
    .where(and(eq(usersTable.id, sessionUser.id), eq(usersTable.email, sessionUser.email)));

  if (result.length === 0) {
    throw new Error('Session user does not match provided ID and email || organization does not exist');
  }
  if (result[0].role === 'member') {
    throw new Error('Session user does not have Privileges');
  }

  return result[0];
}

/**
 * Update the user (mamber/manager) in the database/roganization.
 */

async function updateUsers({
  sessionUser,
  trx,
  orgId,
  members = [],
  managers = [],
  method,
}: {
  sessionUser: User;
  trx: any;
  orgId: string;
  members: Members[];
  managers: Managers[];
  method: string;
}) {
  const existingOrganization = await trx
    .select()
    .from(organizationTable)
    .where(eq(organizationTable.orgId, orgId))

  if (existingOrganization.length === 0) {
    return NextResponse.json({ error: 'Organization not found' }, { status: 404 });
  }

  const currentMembers = existingOrganization[0].members;
  const currentManagers = existingOrganization[0].managers;
  let updatedMembers = [...currentMembers];
  let updatedManagers = [...currentManagers];

  if (method === "UPDATE") {
    // Update members
members.forEach((newMember) => {
  // Check if the new member is already in the managers array
  const managerIndex = updatedManagers.findIndex((manager) => manager.email === newMember.email);
  if (managerIndex !== -1) {
    // Remove the user from managers since they're now being added to members
    updatedManagers.splice(managerIndex, 1);
  }

  const memberIndex = updatedMembers.findIndex((cm) => cm.email === newMember.email);
  if (memberIndex !== -1) {
    // Update existing member
    updatedMembers[memberIndex] = newMember;
  } else {
    // Add new member
    updatedMembers.push(newMember);
  }
});

// Update managers
managers.forEach((newManager) => {
  // Check if the new manager is already in the members array
  const memberIndex = updatedMembers.findIndex((member) => member.email === newManager.email);
  if (memberIndex !== -1) {
    // Remove the user from members since they're now being added to managers
    updatedMembers.splice(memberIndex, 1);
  }

  const managerIndex = updatedManagers.findIndex((cm) => cm.email === newManager.email);
  if (managerIndex !== -1) {
    // Update existing manager
    updatedManagers[managerIndex] = newManager;
  } else {
    // Add new manager
    updatedManagers.push(newManager);
  }
});

  } else if (method === "DELETE") {
    // Combine members and managers for validation
    const combinedChecks = [
      { type: 'member', currentList: currentMembers, newList: members },
      { type: 'manager', currentList: currentManagers, newList: managers },
    ];

    // Loop through each type to check if users in the body exist in the current lists
    combinedChecks.forEach(({ type, currentList, newList }) => {
      const nonExistentUsers = newList.filter(
        (user) => !currentList.some((currentUser: { email: string }) => currentUser.email === user.email)
      );

      if (nonExistentUsers.length > 0) {
        throw new Error(`The following ${type}s are not part of the organization: ${nonExistentUsers.map((u) => u.email).join(', ')}`);
      }
    });
    // Delete members
    updatedMembers = currentMembers.filter(
      (currentMember: Members) => !members.some((member) => member.email === currentMember.email)
    );

    // Delete managers
    updatedManagers = currentManagers.filter(
      (currentManager: Managers) => !managers.some((manager) => manager.email === currentManager.email)
    );
  }

  // if ((newMembers || newManagers )) {
  // Get all new members

  const updatedOrganization = await trx
    .update(organizationTable)
    .set({
      members: updatedMembers,
      managers: updatedManagers,
    })
    .where(eq(organizationTable.orgId, orgId))
    .returning();

  const newMembers = members.filter((member) => {
    if(method === "DELETE") return !(updatedOrganization[0].members).some((currentMember: Members) => currentMember.email === member.email);
    else if(method === "UPDATE") return !currentMembers.some((currentMember: Members) => currentMember.email === member.email);
    else throw new Error("Method not allowed") 
  });

  // Get all new managers
  const newManagers = managers.filter((manager) => {
    if(method === "DELETE") return !(updatedOrganization[0].managers).some((currentManager: Managers) => currentManager.email === manager.email);
    else if(method === "UPDATE") return !currentManagers.some((currentManager: Managers) => currentManager.email === manager.email);
    else throw new Error("Method not allowed") 
  });

  const updatedOrganizationUsers = await updateMembersAndManagers({
    newMembers: newMembers,
    newManagers:  newManagers,
    trx,
    orgId,
    method: method,
  });

  return NextResponse.json({ message: 'Members/Managers updated successfully', organization: updatedOrganization, updatedManagers, updatedMembers, }, { status: 200 });
}
// return NextResponse.json({ message: 'Nothing to do' , newMembers, newManagers }, { status: 404 });


// }

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
    const body = await request.json();

    const { members, managers } = body;

    const response = await db.transaction(async (trx) => {
      // Check if session user matches the organization
      const userData = await checkSessionUser(trx, sessionUser.user);

      // Update organization
      return await updateUsers({
        sessionUser: sessionUser.user,
        trx,
        orgId: userData.orgId,
        members,
        managers,
        method: 'UPDATE',
      });
    });

    // Return response
    return response || NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } catch (error: any) {
    console.error('Error in PUT /api/organizations:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}



/**
 * PUT: Handles organization updates.
 */
export async function DELETE(request: NextRequest) {
  // Check authentication
  const authResponse = await hasAuth();
  if (!(authResponse.ok === true)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const sessionUser = await authResponse.json();

  try {
    const body = await request.json();

    const { members, managers } = body;

    const response = await db.transaction(async (trx) => {
      // Check if session user matches the organization
      const userData = await checkSessionUser(trx, sessionUser.user);

      // Update organization
      return await updateUsers({
        sessionUser: sessionUser.user,
        trx,
        orgId: userData.orgId,
        members,
        managers,
        method: 'DELETE',
      });
    });

    // Return response
    return response || NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } catch (error: any) {
    console.error('Error in PUT /api/organizations:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}


// conflict user alredy have orgID: means user are is part of another org
