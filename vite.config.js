import {defineConfig} from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import compression from "vite-plugin-compression2";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        }),
        compression({
            algorithm: "gzip",
            threshold: 10240,
            exclude: [/\.(br)$/, /\.(gz)$/],
            deleteOriginalAssets: true,
        })
    ],
    base: './',
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
                }
            }
        }
    }
})
