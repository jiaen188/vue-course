<template>
  <div class="menu-box">
    <a-menu>
      <a-menu-item>111</a-menu-item>
      <a-menu-item>222</a-menu-item>
      <a-submenu>
        <div slot="title">333</div>
        <a-menu-item>333-11</a-menu-item>
        <a-submenu>
          <div slot="title">333-22</div>
          <a-menu-item>333-22-1</a-menu-item>
          <a-menu-item>333-22-2</a-menu-item>
        </a-submenu>
      </a-submenu>
    </a-menu>
  </div>
</template>

<script>
// import { AMenu, AMenuItem, ASubmenu } from '_c/menu'
import menuComponents from '_c/menu'
const { AMenu, AMenuItem, ASubmenu } = menuComponents

export default {
  data() {
    return {
    }
  },
  components: {
    AMenu,
    AMenuItem,
    ASubmenu
  }
}
</script>

<style lang="less" scoped>
.menu-box {
  width: 300px;
  height: 400px;
}
</style>
