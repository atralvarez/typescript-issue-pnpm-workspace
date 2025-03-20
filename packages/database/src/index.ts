import { and, count, desc, eq } from "drizzle-orm";
import { type NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import * as pg from "pg";
import * as schema from "./schema";

const { Pool } = pg;

/**
 * Creates an instance of the database client.
 * @param connectionString The connection URL to the database
 * @returns The database client with drizzle-orm
 */

const createDbClient = (
  connectionString: string
): NodePgDatabase<typeof schema> => {
  const pool = new Pool({
    connectionString,
  });

  return drizzle({ client: pool, schema });
};

export { createDbClient, schema, and, count, desc, eq };
