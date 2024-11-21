import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/icons/fill/index.ts",
    "src/icons/medium/index.ts",
    "src/icons/expressive/index.ts",
    "src/icons/line/index.ts",
  ],
  format: ["cjs", "esm"],
  dts: true,
});
