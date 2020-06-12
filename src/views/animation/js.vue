<template>
  <div ref='container' class="container">
      <div ref="js" :style="jsStyle" class="js"></div>
      <div ref="vue" :style="vueStyle" class="vue"></div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import * as Interface from './js'
@Component({
    name: 'x-js-animation'
})
class JsAnimation extends Vue {
    containerRect:Interface.rect
    vueRect:Interface.rect
    jsRect:Interface.rect
    constructor () {
        super()
        this.vueRect = { x: 0, y: 0 }
        this.jsRect = { x: 0, y: 0 }
        this.containerRect = { x: 0, y: 0 }
    }

    mounted () {
        const container = this.$refs.container
        if (container instanceof Element) {
            const { x, y, width, height } = container.getBoundingClientRect()
            this.containerRect = { x, y, width, height }

            const js = this.$refs.container
            if (js instanceof Element) {
                const { x, y, width, height } = js.getBoundingClientRect()
                this.jsRect = { x, y, width, height }

                const handleMouseMove = (event:Event):void => {
                    console.log(event)
                }

                js.addEventListener('mousedown', () => {
                    container.addEventListener('mouseup', () => {
                        container.removeEventListener('mousemove', handleMouseMove)
                    }, { once: true })
                    container.addEventListener('mousemove', handleMouseMove)
                })
            }

            const vue = this.$refs.container
            if (vue instanceof Element) {
                const { x, y, width, height } = vue.getBoundingClientRect()
                this.vueRect = { x, y, width, height }
            }
        }
    }
}

export default JsAnimation

</script>
<style lang="scss" scoped>
@import "@scss/theme/default/color.scss";
.container {
    width: 100%;
    height: 100%;
    position: relative;

    &>.js {
        width: 200px;
        height: 200px;
        background-color: $bg-primary;
    }

    &>.vue {
        width: 200px;
        height: 200px;
        background-color: $bg-secondary;
    }
}
</style>
