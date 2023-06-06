import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    solidPlugin(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      exclude: ['node_modules/**', 'test-project/node_modules/**'],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    lib: {
      entry: './src/index.tsx',
      name: 'Ui',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['solid-js'],
    },
  },
});
