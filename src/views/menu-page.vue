<template>
  <div class="menu-box">
    <!-- <a-menu>
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
    </a-menu> -->
    <a-menu>
      <template v-for="(item, index) in list">
        <a-menu-item v-if="!item.children" :key="index">{{ item.title }}</a-menu-item>
        <re-submenu v-else :key="index" :parent="item" :index="index"></re-submenu>
      </template>
    </a-menu>
  </div>
</template>

<script>
// import { AMenu, AMenuItem, ASubmenu } from '_c/menu'
import menuComponents from '_c/menu'
import ReSubmenu from './re-submenu'
const { AMenu, AMenuItem, ASubmenu } = menuComponents

export default {
  data() {
    return {
      list: [
        {
          title: '1111'
        },
        {
          title: '2222'
        },
        {
          title: '3333',
          children: [
            {
              title: '3333-1'
            },
            {
              title: '3333-2',
              children: [
                {
                  title: '3333-2-1'
                },
                {
                  title: '3333-2-2'
                },
                {
                  title: '3333-2-3',
                  children: [
                    {
                      title: '3333-2-3-1'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    AMenu,
    AMenuItem,
    ASubmenu,
    ReSubmenu
  }
}
</script>

<style lang="less" scoped>
.menu-box {
  width: 300px;
  height: 400px;
}
</style>
