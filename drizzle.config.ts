import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL, ensure the database is provisioned");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.postgresql://neondb_owner:npg_1pzWZft7hxJw@ep-floral-union-adyz7iyc-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require,
  },
});
