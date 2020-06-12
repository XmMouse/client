<template>
  <div class="container">
    index
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component({
    name: 'x-index-page'
})
class IndexPage extends Vue {
}
export default IndexPage
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
