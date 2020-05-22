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
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/">活动管理</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="content"></div>
        <footer class="footer">
          <span>@Copyright of xiaomeng</span>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './menu'
export default {
  name: 'global-layout',
  components: {
    Menu
  }
}
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
        height: 40px;
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
