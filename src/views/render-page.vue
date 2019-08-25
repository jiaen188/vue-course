<template>
  <div>
    <ul>
      <li @click="handleClick" v-for="(item, index) in list" :key="`list_item_${index}`">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
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
  methods: {
    handleClick() {
      console.log('click')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
