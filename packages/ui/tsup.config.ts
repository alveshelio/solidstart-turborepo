import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  clean: true,
  sourcemap: true,
  tsconfig: './tsconfig.json',
  splitting: true,
  target: 'es6',
  minify: !options.watch,
  entry: ['./src/index.ts'],
  format: ['esm'],
  dts: true,
  outDir: 'dist/',
}));
