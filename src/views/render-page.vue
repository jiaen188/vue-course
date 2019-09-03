<template>
  <div>
    <!-- <ul>
      <li @click="handleClick" v-for="(item, index) in list" :key="`list_item_${index}`">{{ item.name }}</li>
    </ul> -->
    <!-- <List :list="list" :render="renderFunc"></List> -->
    <List :list="list">
      <count-to slot-scope="count" :end-val="count.number"></count-to>
    </List>
  </div>
</template>

<script>
import List from '_c/list'
import CountTo from '_c/count-to'

export default {
  name: '',
  data() {
    return {
      list: [
        { name: 'jiaen', number: 100 },
        { name: '18', number: 18 }
      ]
    }
  },
  components: {
    List,
    CountTo
  },
  methods: {
    handleClick(e) {
      console.log('click', e)
    },
    renderFunc(h, number) {
      // return h('i', {
      //   style: {
      //     color: 'pink'
      //   }
      // }, name)
      return (
        // <i on-click={this.handleClick} style={{color: red}}>{name}</i>
        <CountTo nativeOn-click={this.handleClick} on-on-animation-end={this.handleEnd} endVal={number} style={{ color: 'red' }}></CountTo>
      )
    },
    handleEnd() {
      console.log('end!')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
