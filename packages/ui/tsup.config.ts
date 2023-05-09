import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  clean: true,
  sourcemap: true,
  tsconfig: "./tsconfig.json",
  splitting: true,
  target: "es5",
  minify: !options.watch,
  entry: ["./src/index.ts"],
  external: ["solid-js", "solid-js/web"],
  format: ["esm"],
  dts: true,
  outDir: "dist/",
}));
