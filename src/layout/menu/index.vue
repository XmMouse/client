<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <template v-for="(menu1,index) in menu">
      <el-submenu :key="'menu1-sub'+index" v-if="menu1.children" :index="index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{menu1.name}}</span>
        </template>
        <template v-for="(menu2, index2) in menu1.children">
          <el-submenu v-if="menu2.children" :key="'menu2-sub'+index2" :index="'menu2-sub'+index2">
            <template slot="title">{{menu2.name}}</template>
            <el-menu-item v-for="(menu3,index3) in menu2.children" :key="'menu3'+index3" :index="'menu3'+index3">{{menu3.name}}</el-menu-item>
          </el-submenu>
          <el-menu-item v-else :key="'menu2'+index2" :index="index">
            <i class="el-icon-menu"></i>
            <span slot="title">{{nemu2.name}}</span>
          </el-menu-item>
        </template>
      </el-submenu>
      <el-menu-item v-else :key="'menu1-sub'+index" :index="index">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
export default {
  data () {
    return {
      menu: [{
        name: '一级菜单',
        children: [{
          name: '二级菜单',
          children: [{
            name: '三级菜单'
          }, {
            name: '三级菜单'
          }]
        }]
      }, {
        name: '一级菜单二'
      }]
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
