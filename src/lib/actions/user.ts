import { User } from "@/src/types/user";
import { query } from "../db";

export const updateUser = async (user: Partial<User>, userId: string, userEmail: string) => {
    try {
        const updates: string[] = [];
        const values: any[] = [];

        // Iterate over the user object keys dynamically
        Object.keys(user).forEach((key, index) => {
            updates.push(`${key} = $${index + 1}`);
            values.push((user as any)[key]);  // Safely access the value of the key
        });

        if (updates.length === 0) {
            throw new Error('No fields to update');
        }

        // Add userId and email to the values array for the WHERE clause
        values.push(userId);
        values.push(userEmail);

        const updateUserQuery = `
            UPDATE users
            SET ${updates.join(', ')}
            WHERE id = $${values.length - 1}
            AND email = $${values.length}
            RETURNING *;
        `;

        const updatedUser = await query(updateUserQuery, values);

        return updatedUser;
    } catch (error) {
        console.error('Error updating user:', error);
        throw new Error(`Failed to update user from db: ${error}`);
    }
};
