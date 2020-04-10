const path = require('path');

function resolve(dir) {
  return path.join(__dirname,dir);
}
const baseUrl = 'http://123.57.254.38:8080/maven_water_pay';
module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    port: 8050 , // 端口
    proxy: {
      '/api': {
        target: baseUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/upload': {
        target: baseUrl,
        changeOrigin: true,
        pathRewrite: {
          '^': ''
        }
      },
    }
  },
  transpileDependencies: [//增加例外的依赖包名
    'src',
    'webpack-dev-server',
  ],
  lintOnSave: false,//是否开启eslint检查
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'));
  },
};
