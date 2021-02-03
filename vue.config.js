// vue.config.js
module.exports = {
    // 部署应用包时的基本 URL
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    // 当运行 vue- cli - service build 时生成的生产环境构建文件的目录
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist',
    // 关闭语法的自动检测 
    lintOnSave: false,

    css: {
        // css预设器配置项
        loaderOptions: {
            scss: {
                // 注意：在 sass- loader v8 中，这个选项名是 "prependData"
                prependData: `@import "./src/styles/main.scss";`
            },
        }
    },

}