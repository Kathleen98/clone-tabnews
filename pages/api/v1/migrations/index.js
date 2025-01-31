import migrationsRunner from "node-pg-migrate";
import { join } from "node:path";

const migrations = async (request, response) => {
  const migrations = await migrationsRunner({
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pg-migrations",
  });
  response.status(200).json([migrations]);
};

export default migrations;
