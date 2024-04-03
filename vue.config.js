const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 入口文件
  // entry: ""
  // 出口 将项目进行打包,生成打包文件夹
  outputDir: "dits",
  // 放置静态资源,统一配置文件夹
  assetsDir: "assets",
  // 服务器代理 -  development
  devServer: {
    // 端口号
    port: '8888',
    // 启动项目直接打开浏览器
    open: true,
    // 配置代理
    proxy: {
      // 代理标识
      "/api": {
        // 代理路径
        target: "https://www.baidu.com/",
        // 是否开启代理
        changeOrigin: true,
        // 路径重写
        pathRewrite:{
          "^/api": ""
        }
      }
    }
  }
})
