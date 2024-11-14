import { eq } from "drizzle-orm";
import { db } from "../db";
import { usersTable } from "../schema/user";

type UserRole = 'user' | 'admin' | 'manager' | 'member';

interface UpdateUserPayload {
  trx:any;
  id: number;
  role: UserRole;
  data: Partial<{
    name: string;
    email: string;
  }>;
  updaterId: number; // The ID of the user making the request
  updaterRole: UserRole; // The role of the user making the request
}

export async function updateUser({
  trx,
  id,
  role,
  data,
  updaterId,
  updaterRole,
}: UpdateUserPayload) {
  try {
      // Check permissions based on the updater's role
      const hasPermission = (() => {
        if (updaterRole === 'user') {
          // A user can update only themselves
          return updaterId === id;
        } else if (updaterRole === 'member') {
          // A member can update only themselves
          return updaterId === id;
        } else if (updaterRole === 'manager') {
          // A manager can update members and themselves only
          return role === 'member' || updaterId === id;
        } else if (updaterRole === 'admin') {
          // An admin can update managers, members, and themselves but not other admins
          return role !== 'admin' || updaterId === id;
        }
        return false;
      })();

      if (!hasPermission) {
        throw new Error('You do not have permission to update this user');
      }

      // Update the user in the database
      const updatedUser = await trx
        .update(usersTable)
        .set(data)
        .where(eq(usersTable.id, id))
        .returning(); // Adjust based on Drizzle's return support

      if (!updatedUser) {
        throw new Error('User update failed or user not found');
      }

      return {
        message: `User update successful`,
        user: updatedUser,
      };
  } catch (error: any) {
    console.error('Error updating user:', error);
    throw new Error(`Error updating user: ${error.message}`);
  }
}
