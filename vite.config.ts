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
  build: {
    assetsDir: '/',
    rollupOptions: {
      input: './index.html',
      output: {
        generatedCode: 'es5',
        // 入口文件
        entryFileNames(chunk) {
          return 'js/app-[hash].js';
        },
        // async-chunk
        chunkFileNames() {
          return 'js/chunk-[hash].js';
        },
        // 资源文件
        assetFileNames(chunk) {
          // css
          if (chunk.name?.endsWith('.css')) {
            return 'css/[name]-[hash].[ext]';
          }
          // image
          if (/.(png|jpg|gif|jpeg|webp|svg)$/.test(chunk.name || '')) {
            return 'images/[name]-[hash].[ext]';
          }

          return `other/[name]-[hash].[ext]`;
        },
      },
    },
  },
});
