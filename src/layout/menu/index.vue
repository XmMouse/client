<template>
    <el-menu default-active="2">
        <template v-for="(menu,index) in menu">
            <!-- key 和 index 的值不能一样 -->
            <el-submenu :key="'menu-sub'+index" v-if="menu.children" :index="'menu' + index">
                <template slot="title">
                    <i :class="menu.meta&&menu.meta.icon"></i>
                    <span>{{menu.meta&&menu.meta.title}}</span>
                </template>
                <template v-for="(menu2, index2) in menu.children">

                    <el-submenu v-if="menu2.children" :key="'menu2-sub'+index2" :index="'menu2-sub'+index2">
                        <template slot="title">{{menu2.meta&&menu2.meta.title}}</template>
                        <el-menu-item v-for="(menu3,index3) in menu2.children" :key="'menu3-sub'+index3"
                            :index="'menu3-sub'+index3"
                            @click.native="() => gotoPage(menu.path+'/'+menu2.path+'/'+menu3.path)">
                            <i :class="menu3.meta&&menu3.meta.icon"></i>
                            <span slot="title">{{menu3.meta&&menu3.meta.title}}</span>
                        </el-menu-item>
                    </el-submenu>

                    <el-menu-item @click.native="() => gotoPage(menu.path+'/'+menu2.path)" v-else
                        :key="'menu2-sub'+index2" :index="'menu2'+index2">
                        <i :class="menu2.meta&&menu2.meta.icon"></i>
                        <span slot="title">{{menu2.meta&&menu2.meta.title}}</span>
                    </el-menu-item>

                </template>
            </el-submenu>

            <el-menu-item @click.native="() => gotoPage(menu.path)" v-else :key="'menu-sub'+index"
                :index="'menu' +index">
                <i :class="menu.meta&&menu.meta.icon"></i>
                <span slot="title">{{menu.meta&&menu.meta.title}}</span>
            </el-menu-item>

        </template>
    </el-menu>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { routes } from '../../router'
@Component({
    name: 'layout-menu'
})
class Menu extends Vue {
  menu: Array<Object>;

  constructor () {
      super()
      this.menu = routes
  }

  gotoPage (path: string) {
      this.$router.push(path.replace(new RegExp(/\/+/, 'g'), '/'))
  }
}
export default Menu
</script>
<style lang="sass" scoped>
</style>
