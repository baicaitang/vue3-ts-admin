const path = require('path');

// vue.config.js
module.exports = {
    // 部署应用包时的基本 URL
    publicPath: process.env.NODE_ENV === 'production' ? '' : './',
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

    chainWebpack: config => {
        // svg
        config.module.rules.delete('svg');
        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include
            .add(path.resolve('./src/assets/svg'))//处理svg目录
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            });
        // 修改images loader 添加svg处理
        const imagesRule = config.module.rule('images')
        imagesRule.exclude.add(path.resolve('src/assets/svg'))
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    },

    // 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器
    devServer: {
        open: false, //运行项目后是否自动打开项目
        host: "0.0.0.0", //可以局域网外部访问
        port: 8000,
        proxy: {  //跨域配置
            [process.env.VUE_APP_FLAG]: {
                target: process.env.VUE_APP_APIURL,
                ws: false, //webscoket
                changeOrigin: true, //是否开启跨域
                pathRewrite: { //路径重写
                    [`^${process.env.VUE_APP_FLAG}`]: "" //  查找开头为/process.env.VUE_APP_FLAG 的字符串地址  替换成空字符串"" 只剩下后面的字符串会拼接到target
                }
            },

        }
    }

}
