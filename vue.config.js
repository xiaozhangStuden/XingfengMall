const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      open: true,
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
