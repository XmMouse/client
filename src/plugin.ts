import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

/**
 * 全局外部资源加载模块
 * @author xiaomeng
 */
type vue = typeof Vue

/**
 * 加插件
 * @function
 * @param {vue} vue
 * @returns {vue}
 */
export default (vue:vue):vue => {
  vue.use(ElementUI)
  return vue
}
