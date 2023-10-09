// 配置及预设
import {defineConfig, presetAttributify, presetIcons, presetUno} from 'unocss'
// 分组
import transformerVariantGroup from '@unocss/transformer-variant-group'
// 指令
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
    rules: [
        ['text-color', {color: 'var(--text-color)'}],

    ],
    shortcuts: {},
    theme: {
        breakpoints: {
            'xs': '370px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
    },
    presets: [
        presetUno(),
        presetIcons(),
        presetAttributify(),
    ],
    transformers: [
        transformerVariantGroup(),
        transformerDirectives(),
    ],
})