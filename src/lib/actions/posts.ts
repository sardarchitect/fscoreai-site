// utils/generateSlug.ts
import { db } from '@/src/lib/db';
import { postsTable } from '../schema/forem';
import { count, eq } from 'drizzle-orm';

export async function generateUniqueSlug(title: string): Promise<string> {
    // Convert the title to a slug-friendly format (e.g., "My New Post" -> "my-new-post")
    let slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

    const existingPost = await db.select({ count: count() }).from(postsTable).where(eq(postsTable.slug, slug));

    if (existingPost[0]?.count > 0) {
        const randomSuffix = Math.random().toString(36).slice(2, 8);
        slug = `${slug}-${randomSuffix}`;
    }

    return slug;
}
