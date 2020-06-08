import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import upload from './upload'
import test from './test'

Vue.use(VueRouter)

export const routes: Array<RouteConfig> = [upload, test]

const router = new VueRouter({
  routes
})

export default router
