module.exports = {
    plugins: {
        // tailwind css
        tailwindcss: {},
        // 自动前戳
        autoprefixer: {},
        // css 缩减
        ...({cssnano: {}})
    },
}
