import config from "./config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as userSchema from "./schema/user";
import * as organizationSchema from "./schema/organization";

let sslmode = "";
if (config.APP_ENV === "prod") {
  sslmode = "?sslmode=require";
}

export const pool = new Pool({
  connectionString: config.POSTGRES_URL + sslmode,
  max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
});

export const db = drizzle(pool, { schema: {userSchema, organizationSchema}, logger: true });


export const query = async (text: string, params?: any[]) => {
    const client = await pool.connect(); // Get a client from the pool

    try {
        return await client.query(text, params);
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    } finally {
        client.release(); 
    }
};




















// import { Pool } from 'pg';

// let pool: Pool | null = null;

// const getPool = () => {
//     if (!pool) {
//         pool = new Pool({
//             connectionString: process.env.POSTGRES_URL,
//             // max: 10,  // Set maximum pool size to manage concurrent connections
//             // idleTimeoutMillis: 60000,  // Close idle clients after 60 seconds
//             // connectionTimeoutMillis: 2000,  // Return an error after 2 seconds if no connection could be established
//         });
//     }
//     return pool;
// };

// export const query = async (text: string, params?: any[]) => {
//     const client = await getPool().connect(); // Get a client from the pool

//     try {
//         return await client.query(text, params);
//     } catch (error) {
//         console.error('Database query error:', error);
//         throw error;
//     } finally {
//         client.release(); 
//     }
// };


