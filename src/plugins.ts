/**
 * @desc 插件加载模块
 * @module module:plugins
 * @requires element-ui
 */
import { VueConstructor } from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/**
 * 加载插件
 * @function
 * @param {VueConstructor} vue
 * @returns {VueConstructor}
 */
export default (vue: VueConstructor): VueConstructor => {
  vue.use(ElementUI)
  vue.use(VueRouter)
  return vue
}
