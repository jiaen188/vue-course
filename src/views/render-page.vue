<template>
  <div>
    <!-- <ul>
      <li @click="handleClick" v-for="(item, index) in list" :key="`list_item_${index}`">{{ item.name }}</li>
    </ul> -->
    <List :list="list" :render="renderFunc"></List>
  </div>
</template>

<script>
import List from '_c/list'

export default {
  name: '',
  data() {
    return {
      list: [
        { name: 'jiaen' },
        { name: '18' }
      ]
    }
  },
  components: {
    List
  },
  methods: {
    handleClick() {
      console.log('click')
    },
    renderFunc(h, name) {
      return h('i', {
        style: {
          color: 'pink'
        }
      }, name)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
