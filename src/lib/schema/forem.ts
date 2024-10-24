import { pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { usersTable } from "./user";
import { sql } from "drizzle-orm";

// Posts table
export const postsTable: any = table(
    "posts",
    {
      id: t.uuid("id").primaryKey().defaultRandom(), // UUID for post ID
      slug: t.varchar("slug", { length: 64 }).notNull(), // Unique slug for SEO
      title: t.varchar("title", { length: 256 }).notNull(),
      content: t.text("content"), // Content of the post
      category: t.varchar("category", { length: 128 }).notNull().default('uncategories'), // Category of the post
      likes: t.integer("likes").default(0), // Number of likes, default to 0
      solved: t.boolean("solved").default(false), // Whether the post is marked as solved
      views: t.integer("views").default(0), // Number of views, default to 0
      ownerId: t.uuid("owner_id").references(() => usersTable.id), // Reference to user
      createdAt: t.timestamp("created_at", { withTimezone: false }).defaultNow(),
      updatedAt: t.timestamp("updated_at", { withTimezone: false }).defaultNow(),
    },
    (table) => {
      return {
        slugIndex: t.uniqueIndex("slug_idx").on(table.slug), // Unique index for slug
        titleIndex: t.index("title_idx").on(table.title),
        categoryIndex: t.index("category_idx").on(table.category), // Index for category
      };
    }
  );

  // Likes table to store who liked the post
export const postLikesTable: any = table(
  "post_likes",
  {
    id: t.uuid("id").primaryKey().defaultRandom(),
    postId: t.uuid("post_id").references(() => postsTable.id, { onDelete: 'cascade' }), // Foreign key to the post
    userId: t.uuid("user_id").references(() => usersTable.id, { onDelete: 'set null' }).default("user-was-removed"), // Foreign key to the user
    createdAt: t.timestamp("created_at", { withTimezone: false }).defaultNow(),
  },
  (table) => {
    return {
      likeIndex: t.uniqueIndex("like_idx").on(table.postId, table.userId), // Unique index to prevent duplicate likes
    };
  }
);


  // views table to store who view the post
  export const postViewsTable: any = table(
    "post_views",
    {
      id: t.uuid("id").primaryKey().defaultRandom(),
      postId: t.uuid("post_id").references(() => postsTable.id, { onDelete: 'cascade' }), // Foreign key to the post
      userId: t.uuid("user_id").references(() => usersTable.id, { onDelete: 'set null' }).default("user-was-removed"), // Foreign key to the user
      createdAt: t.timestamp("created_at", { withTimezone: false }).defaultNow(),
    },
    (table) => {
      return {
        viewIndex: t.uniqueIndex("view_idx").on(table.postId, table.userId), // Unique index to prevent duplicate likes
      };
    }
  );
  

// Comments table
export const commentsTable: any = table(
  "comments",
  {
    id: t.uuid("id").primaryKey().defaultRandom(), // UUID for comment ID
    text: t.varchar("text", { length: 512 }).notNull(), // Comment text
    postId: t.uuid("post_id").references(() => postsTable.id), // Reference to post
    parentId: t.uuid("parent_id").references(() => commentsTable.id), // Reference to parent comment
    ownerId: t.uuid("owner_id").references(() => usersTable.id), // Reference to user
    createdAt: t.timestamp('created_at', { withTimezone: false }).defaultNow(),
    updatedAt: t.timestamp('updated_at', { withTimezone: false }).defaultNow()
  },
  (table) => {
    return {
      postIdIndex: t.index("post_id_idx").on(table.postId),
      parentIdIndex: t.index("parent_id_idx").on(table.parentId),
    };
  }
);



export async function updateSchema(db: any) {

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
        BEFORE UPDATE ON posts
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
    `);

    // Create the trigger for updating the updated_at column
    await db.execute(sql`
        CREATE TRIGGER update_organization_updated_at
        BEFORE UPDATE ON comments
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
    `);
}

// (async () => {
//     await updateSchema(db);
// })