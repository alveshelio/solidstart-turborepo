import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-plugin-dts";
import path from "path";
import terser from "@rollup/plugin-terser";

export default defineConfig({
  plugins: [
    solidPlugin(),
    dts({
      insertTypesEntry: true,
      outputDir: "dist",
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      formats: ["es"],
      name: "UI",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["solid-js", "solid-js/web"],
      output: {
        exports: "named",
        globals: {
          "solid-js": "Solid",
          "solid-js/web": "SolidWeb",
        },
      },
      plugins: [terser()],
    },
    ssr: {},
    sourcemap: true,
    emptyOutDir: true,
  },
});
