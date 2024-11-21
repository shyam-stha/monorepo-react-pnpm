/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      staticImport: true,
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test.setup.ts",
    css: false,
    coverage: {
      provider: "v8",
      reporter: ["lcov", "cobertura", "text"],
      exclude: [
        "**/index.ts",
        "**/vite-env.d.ts",
        "**/test-utils.ts",
        "**.storybook/*",
        "**/*.stories.tsx",
        "**/scripts/*",
        "**/stories/*",
        "**/coverage/*",
        "**/storybook-static/*",
        "**/hooks/*",
      ],
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "index",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        assetFileNames: "index.css",
        globals: {
          react: "react",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
