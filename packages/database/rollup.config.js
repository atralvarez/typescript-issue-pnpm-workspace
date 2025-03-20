import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        format: "esm",
        preserveModules: false,
        sourcemap: true,
      },
    ],
    external: [
      "drizzle-orm",
      "pg",
      "dotenv",
      "drizzle-orm/pg-core",
      "drizzle-orm/node-postgres",
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.build.json",
        declaration: true,
        declarationDir: "./dist",
      }),
    ],
  },
  {
    input: "src/schema/index.ts",
    output: [
      {
        dir: "dist/schema",
        format: "esm",
        preserveModules: false,
        sourcemap: true,
      },
    ],
    external: [
      "drizzle-orm",
      "drizzle-orm/pg-core",
      "drizzle-orm/node-postgres",
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.build.json",
        declaration: false
      }),
      {
        closeBundle() {
          if (!process.env.ROLLUP_WATCH) {
            setTimeout(() => process.exit(0));
          }
        },
        name: "force-close",
      },
    ],
  },
]);
