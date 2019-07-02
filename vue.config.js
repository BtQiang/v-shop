// const autoprefixer = require('autoprefixer');
// const pxtorem = require('postcss-pxtorem');
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  productionSourceMap: false,  // 去掉打包后js中，会自动生成的一些map文件
  devServer: {
    proxy: { 
      '/api': {
        target: 'http://wx.lohike.net',
        changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: false,          // 设置支持https协议的代理
        pathRewrite: {'^/api' : ''},
      },
      '/shop_api': {
        target: 'https://api.it120.cc/xiaochengxu',
        changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: false,          // 设置支持https协议的代理
        pathRewrite: {'^/shop_api' : ''},
      },
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets',resolve('src/assets'))
      .set('@styles', resolve('src/styles'))
  }
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         autoprefixer(),
  //         pxtorem({
  //           rootValue: 37.5,
  //           propList: ['*'],
  //           // 该项仅在使用 Circle 组件时需要
  //           // 原因参见 https://github.com/youzan/vant/issues/1948
  //           selectorBlackList: ['van-circle__layer']
  //         })
  //       ]
  //     }
  //   }
  // }
}