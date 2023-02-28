module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        // 打包压缩
        ...(process.env.NODE_ENV === 'production' ? {cssnano: {}} : {})
    },
}
