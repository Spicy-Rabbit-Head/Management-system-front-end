import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import FullReload from 'vite-plugin-full-reload'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { join, resolve } from 'path'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    // 自动导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: 'src/types/auto-imports.d.ts',
    }),
    Components({
      resolvers: [ElementPlusResolver(), NaiveUiResolver()],
      dts: 'src/types/components.d.ts',
    }),
    VueI18nPlugin({
      include: [resolve(__dirname, './src/i18n/**')],
    }),
    UnoCSS(),
    FullReload('src/**/*.*')
  ],
  // base: '/',
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    }
  },
  build: {
    // 块大小限制警告
    chunkSizeWarningLimit: 2000,
    // css代码分割
    cssCodeSplit: true,
    // 源地图
    sourcemap: false,
    // 内联动态导入的最大文件大小
    assetsInlineLimit: 4096,
    // 打包策略
    rollupOptions: {
      // 输出
      output: {
        // 手动指定
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 根据包名分割
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
      }
    }
  }
})
