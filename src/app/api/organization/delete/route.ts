import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/src/lib/db'; // Drizzle ORM instance
import { organizationTable } from '@/src/lib/schema/organization'; // Drizzle schema for the organization table
import { and, eq } from 'drizzle-orm/expressions';
import { hasAuth } from '@/src/lib/Middleware/hasAuth';
import { handleErrorResponse } from '@/src/types/api_response';
import { checkSessionUserForAdmin, updateUserRole } from '@/src/lib/actions/user';
import { usersTable } from '@/src/lib/schema/user';
import { User } from 'next-auth';


export async function DELETE(req: NextRequest) {
  //  Authenticate the request
  const authResponse = await hasAuth();
  if (!(authResponse.ok === true)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const sessionUser = await authResponse.json();

  try {

    //  Initialize database transaction
    return await db.transaction(async (trx) => {
      // Validate the session user and organization ownership
      const sessionUserResult = await checkSessionUserForAdmin(trx, sessionUser.user);
      
      const orgId = await sessionUserResult.orgId;
      if(orgId === null){
        throw new Error('user have no organization') 
      }

      // Delete the adminUserOrgId from users table
      const deleteAdminUserData = await deleteUserId(trx, sessionUser.user.id);

      // Delete the organization
      
      const deleteRowData = await deleteOrganization(trx, orgId);
      
      if (deleteRowData.adminUserId) {
        const updatedRole = await updateUserRole({userId: deleteRowData.adminUserId, updatedRole: "user", trx})
      }

      //  Commit the transaction
      return NextResponse.json({ message: 'Organization deleted successfully' }, { status: 200 });
    });

  } catch (error: any) {
    console.error('Error in DELETE /api/organization:', error);
    return handleErrorResponse(error);
  }
}


/**
 * Deletes the organization from the database
 */
async function deleteOrganization(trx: any, orgId: string) {

    const deletedRows = await trx
      .delete(organizationTable)
      .where(eq(organizationTable.orgId, orgId))
      .returning({adminUserId: organizationTable.adminUserId});
      if(deletedRows.length === 0 ){
        throw new Error('Failed to delete organization')
      }
      return deletedRows[0]
  }
  
/**
 * Deletes the organization from the database
 */
async function deleteUserId(trx: any, adminUserId: string) {
  const result = await trx
    .update(usersTable)
    .set({ orgId: null })
    .where(eq(usersTable.id, adminUserId))
    .returning({email: usersTable.email});
    if(result.length === 0 ){
      throw new Error('Failed to delete organization Id from User Table')
    }
    return result[0]
}

