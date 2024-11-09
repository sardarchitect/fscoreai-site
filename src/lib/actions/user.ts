import { Managers, Members, User } from "@/src/types/user";
import { query } from "../db";
import { usersTable } from "../schema/user";
import { and, eq, or } from "drizzle-orm";

export async function updateUserRole({ userId, email, updatedRole, trx, orgId }: { orgId?: string, userId: string, email: string, updatedRole: string, trx: any }) {



  // CHECK USER IS PART OF ANOTHER ORG OR NOT 
  const checkUserOrgResult = await trx
    .select({ userOrgId: usersTable.orgId, })
    .from(usersTable)
    .where(or(eq(usersTable.id, userId), eq(usersTable.email, email)))

  console.log(orgId, "jhbjvvvvuvuvuyefih uir8hgi9")

  if (checkUserOrgResult.length === 0) {
    throw new Error(`${email} not exist`)
  } else if (checkUserOrgResult[0].userOrgId !== null) {
    if (checkUserOrgResult[0].userOrgId === orgId) {
    }
    else throw new Error(`user ${email} is part of other organization:`)
  }

  // update user 
  const roleUpdateResult = await trx
    .update(usersTable)
    .set({
      role: updatedRole,
      orgId: updatedRole === "user" ? null : orgId
    }).where(or(eq(usersTable.id, userId), eq(usersTable.email, email))).returning({ role: usersTable.role });

  if (roleUpdateResult.length === 0 || !(roleUpdateResult[0].role) || roleUpdateResult.error) {
    throw new Error('Error updating role:')
  }
  return { data: roleUpdateResult[0] };
}

export async function updateMembersAndManagers({
  newMembers,
  newManagers,
  trx,
  orgId,
  method,
}: {
  newMembers: Members[];
  newManagers: Managers[];
  trx: any;
  orgId?: any;
  method: string;
}) {

  // Update roles for new members
  for (const member of newMembers) {
    await updateUserRole({ userId: member.id, email: member.email, updatedRole: method === "UPDATE" ? "member" : "user", trx, orgId: orgId });
  }
  // Update roles for new managers
  for (const manager of newManagers) {
    await updateUserRole({ userId: manager.id, email: manager.email, updatedRole: method === "UPDATE" ? "manager" : "user", trx, orgId: orgId });
  }
}



export async function checkSessionUserForAdmin(trx: any, sessionUser: any) {

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