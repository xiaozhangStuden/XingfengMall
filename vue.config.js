const { defineConfig } = require('@vue/cli-service')

const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      open: true,
      // 192.168.31.35
      host: '172.20.10.3',
      port: process.env.ENV === 'development' ? 8888 : 3000
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
})
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 全局less变量存储路径
        path.resolve(__dirname, './src/styles/variable.less')
      ]
    }
  }
}
