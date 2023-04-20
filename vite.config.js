import {defineConfig} from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver, NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue(),
        // 组件自动导入
        AutoImport({
            resolvers: [ElementPlusResolver(), NaiveUiResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver(), NaiveUiResolver()],
        }),
        // 压缩
        // compression({
        //     // 压缩格式
        //     algorithm: "gzip",
        //     // 压缩范围
        //     threshold: 10240,
        //     // 排除已压缩文件
        //     exclude: [/\.(br)$/, /\.(gz)$/],
        //     // 删除原始文件
        //     deleteOriginalAssets: true,
        // })
    ],
    base: '/',
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
