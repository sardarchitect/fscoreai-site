import { defineConfig } from "drizzle-kit";
import config from "./src/lib/config";

let sslmode = "";
if (config.APP_ENV === "prod") {
  sslmode = "?sslmode=require";
}

export default defineConfig({
  schema: "./src/lib/schema",
  dialect: "postgresql", // "postgresql" | "mysql"
  out: "./drizzle",
//   driver: "pg",
  dbCredentials: {
    url: config.POSTGRES_URL + sslmode,
  },
  verbose: true,
  strict: true,
});