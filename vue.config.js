const { defineConfig } = require('@vue/cli-service')
const ImportLessFile = (Path) => path.resolve(__dirname, Path)
const BASELESSFIlEPATH = './src/styles'
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      open: true,
      // 192.168.31.35 172.20.10.3
      host: '172.20.10.3',
      port: process.env.ENV === 'development' ? 8888 : 3000
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 全局less变量存储路径
        ImportLessFile(`${BASELESSFIlEPATH}/variable.less`),
        ImportLessFile(`${BASELESSFIlEPATH}/mxins.less`)
      ]
    }
  }
})
