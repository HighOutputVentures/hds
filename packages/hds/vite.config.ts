/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { join } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/hds',
  plugins: [
    dts({
      entryRoot: 'src',
      tsConfigFilePath: join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],
  build: {
    ssr: true,
    lib: {
      entry: {
        index: 'src/index.ts',
        nextjs: 'src/nextjs.ts',
        framer: 'src/framer.ts',
        emotion: 'src/emotion.ts',
        components: 'src/components/index.ts',
      },
      name: 'hds',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
});
