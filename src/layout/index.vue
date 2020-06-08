<template>
  <div class="layout">
    <header class="header"></header>
    <div class="container">
      <aside class="aside">
        <Menu></Menu>
      </aside>
      <div class="main">
        <div class="crumbs">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item
              v-if="routes.length !== 0"
              :to="{ path: '/' }"
            >首页</el-breadcrumb-item>
            <el-breadcrumb-item
              v-for="(route,index) in routes"
              :key="index"
            >
              <router-link :to="route">{{route.meta.title}}</router-link>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="content">
          <router-view></router-view>
        </div>
        <footer class="footer">
          <span>@Copyright of xiaomeng</span>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Menu from './menu/index.vue'
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import { RouteConfig } from 'vue-router'

@Component({
  name: 'x-component-menu',
  components: {
    Menu
  }
})
class LayoutMenu extends Vue {
  routes: Array<RouteConfig>;
  constructor () {
    super()
    this.routes = []
  }

  @Watch('$router.matched')
  flushRoutes (routes: Array<RouteConfig>) {
    this.routes = routes
  }
}
export default LayoutMenu
</script>
<style scoped lang="scss">
@import "assets/scss/theme/default/color.scss";
.layout {
  height: 100vh;
  width: 100vw;
  & > .header {
    height: 60px;
    padding: 0px 24px;
    background-color: $bg-primary;
  }
  & > .container {
    height: calc(100vh - 60px);
    & > .aside {
      float: left;
      height: 100%;
      width: 240px;
      border-right: 1px solid $border-primary;
    }
    & > .main {
      height: 100%;
      position: relative;
      overflow: hidden;
      & > .crumbs {
        display: flex;
        align-items: center;
        height: 32px;
        line-height: 32px;
        background-color: $bg-third;
      }
      & > .content {
        position: absolute;
        top: 40px;
        right: 0px;
        left: 0px;
        bottom: 40px;
      }
      & > .footer {
        position: absolute;
        padding: 0px 24px;
        bottom: 0px;
        height: 40px;
        width: 100%;
        line-height: 40px;
        background-color: $bg-primary;
      }
    }
  }
}
</style>
