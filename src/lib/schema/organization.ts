import { sql } from 'drizzle-orm';
import { pgTable, uuid, varchar, text, jsonb, timestamp } from 'drizzle-orm/pg-core';
import { usersTable } from './user';
import { db } from '../db';

export const organizationTable = pgTable('organization', {
    orgId: uuid('org_id').defaultRandom().primaryKey(),
    name: varchar('name', { length: 255 }),
    contact: jsonb('contact').notNull().default('{}'),
    currentPlan: varchar('current_plan', { length: 100 }).default("free"),
    members: jsonb('members').notNull().default('[]'), 
    managers: jsonb('managers').notNull().default('[]'), 
    adminUserId: uuid('admin_user_id').notNull().references(() => usersTable.id, { onDelete: 'cascade' }),
    billingHistory: jsonb('billing_history'),
    // email: varchar('email', { length: 255 }).notNull().unique('organization_email_key'),
    shortDescription: text('short_description'),
    createdAt: timestamp('created_at', { withTimezone: false }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: false }).defaultNow().notNull(),
});


export async function updateSchema(db: any) {
    // Add check constraint for current_plan
    await db.execute(sql`
        ALTER TABLE organization ADD CONSTRAINT check_plan CHECK (current_plan IN ('free', 'basic', 'premium'));
    `);

    // Create the trigger function to enforce key constraints
    await db.execute(sql`
        CREATE OR REPLACE FUNCTION check_keys()
        RETURNS TRIGGER AS $$
        BEGIN
            PERFORM jsonb_each_text(NEW.members);
            PERFORM jsonb_each_text(NEW.managers);
            IF jsonb_typeof(NEW.members) <> 'array' OR EXISTS (
                SELECT 1 FROM jsonb_array_elements(NEW.members) elem
                WHERE (elem->>'id') IS NULL OR (elem->>'name') IS NULL
            ) THEN
                RAISE EXCEPTION 'Invalid members JSON';
            END IF;
            IF jsonb_typeof(NEW.managers) <> 'array' OR EXISTS (
                SELECT 1 FROM jsonb_array_elements(NEW.managers) elem
                WHERE (elem->>'id') IS NULL OR (elem->>'name') IS NULL
            ) THEN
                RAISE EXCEPTION 'Invalid managers JSON';
            END IF;
            RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;
    `);

    // Create the trigger
    await db.execute(sql`
        CREATE TRIGGER check_keys_trigger
        BEFORE INSERT OR UPDATE ON organization
        FOR EACH ROW
        EXECUTE FUNCTION check_keys();
    `);

    // Create the trigger function to update the updated_at column
    await db.execute(sql`
        CREATE OR REPLACE FUNCTION update_updated_at_column()
        RETURNS TRIGGER AS $$
        BEGIN
            NEW.updated_at = NOW();
            RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;
    `);

    // Create the trigger for updating the updated_at column
    await db.execute(sql`
        CREATE TRIGGER update_organization_updated_at
        BEFORE UPDATE ON organization
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
    `);
}

// (async () => {
//     const db = {}; // your database connection here
//     await updateSchema(db);
// })