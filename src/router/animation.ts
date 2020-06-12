import { RouteConfig } from 'vue-router'
const animation:RouteConfig = {
    path: '/animation',
    component: { render (_h) { return _h('router-view') } },
    children: [{
        path: 'js',
        component: () => import('@view/animation/js.vue'),
        meta: {
            title: 'js原生动画'
        }
    }],
    meta: {
        title: '动画',
        icon: 'el-icon-loading'
    }
}
export default animation
