/* eslint-disable */
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('layout', resolve('src/layout'))
      .set('base', resolve('src/base'))
      .set('static', resolve('src/static'))
      // 以下为自定义
      .set('@view', resolve('src/views'))
      .set('scss', resolve('src/static/scss'))
      .set('@ts', resolve('src/static/ts'))
      .set('@img', resolve('src/static/img'))
      .set('@api', resolve('src/api'))
  }
}
