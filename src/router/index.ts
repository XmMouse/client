import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import upload from './upload'
import test from './test'
import animation from './animation'

Vue.use(VueRouter)

export const routes: Array<RouteConfig> = [{
    path: '/',
    component: {
        render (_h) {
            return _h('router-view')
        }
    },
    redirect: { name: 'index' },
    children: [{
        path: 'index',
        name: 'index',
        component: () => import('@view/index/index.vue')
    }]
}, upload, test, animation]

const router = new VueRouter({
    routes
})

export default router
