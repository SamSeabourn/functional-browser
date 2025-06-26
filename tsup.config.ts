import { defineConfig } from 'tsup';

export default defineConfig({
  dts: true,
  shims: true,
  clean: true,
  format: ['cjs', 'esm'],
  entry: ['./src/index.ts'],
  skipNodeModulesBundle: true,
});
