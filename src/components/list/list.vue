<template>
  <ul>
    <li @mousemove.prevent="handleMove" v-for="(item, index) in list" :key="index">
      <span v-if="!render">{{ item.name }}</span>
      <render-dom v-else :render-func="render" :number="item.number"></render-dom>
    </li>
  </ul>
</template>

<script>
import RenderDom from '_c/render-dom'

export default {
  name: 'List',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    render: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    RenderDom
  },
  data() {
    return {
    }
  },
  methods: {
    handleMove() {
      // 取消文字的选中效果
    }
  }
}
</script>

<style lang="less" scoped>

</style>
