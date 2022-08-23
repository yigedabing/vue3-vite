import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // build: {
  //   target: 'es6',
  //   rollupOptions: {
  //     output: {
  //       esModule: false,
  //       generatedCode: 'es5',
  //     },
  //   },
  // },
});
