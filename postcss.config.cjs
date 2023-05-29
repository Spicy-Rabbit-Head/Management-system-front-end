module.exports = {
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        // tailwind css
        tailwindcss: {},
        // 自动前戳
        autoprefixer: {},
        // css 缩减
        ...({cssnano: {}})
    },
}
