<template>
  <div>
    i am email
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'from email')
    }
  },
  mounted () {
    console.log('this.bus', this.$bus)
  }
}
</script>

<style>

</style>
