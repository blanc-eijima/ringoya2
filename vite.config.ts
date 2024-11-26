import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // 静的アセットの設定を追加
  publicDir: 'public',
  build: {
    // 画像などの静的ファイルをコピー
    copyPublicDir: true,
    assetsDir: 'assets',
  },
});