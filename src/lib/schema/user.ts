import { sql } from 'drizzle-orm';
import { pgTable, uuid, varchar, text, timestamp, integer, pgEnum } from 'drizzle-orm/pg-core';
import { db } from '../db';
import { organizationTable } from './organization';

// Enum for user roles
export const rolesEnum = pgEnum("role", ["admin", "member", "manager", "user"]);


// Define the 'users' table schema using Drizzle ORM
export const usersTable: any = pgTable('users', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    orgId: uuid('org_id').references(() => organizationTable.orgId).default(sql`NULL`), 
    name: varchar('name', { length: 100 }),
    email: varchar('email', { length: 255 }).notNull().unique('users_email_key'),  // Apply named unique constraint
    password: varchar('password', { length: 255 }).notNull(),
    role: rolesEnum().default("user"),
    // role: varchar('role', { length: 20 }).default('user'),
    createdAt: timestamp('created_at', { withTimezone: false }).defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: false }).defaultNow()
});

// Function to create the trigger
async function createUserTriggers() {
    // Create the trigger function
    await db.execute(sql`
        CREATE OR REPLACE FUNCTION update_updated_at_column()
        RETURNS TRIGGER AS $$
        BEGIN
            NEW.updated_at = NOW();  -- Set updatedAt to the current timestamp
            RETURN NEW;  -- Return the modified row
        END;
        $$ LANGUAGE plpgsql;
    `);

    // Create the trigger
    await db.execute(sql`
        CREATE TRIGGER update_users_updated_at
        BEFORE UPDATE ON users
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
    `);
}

export async function addEmailConstraint() {
    await db.execute(sql`
        ALTER TABLE users 
        ADD CONSTRAINT email_format_constraint 
        CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');
    `);
}
  
  


// (async () => {
//     await ();
// })();
