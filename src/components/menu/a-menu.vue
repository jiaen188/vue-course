<template>
  <div class="a-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AMenu',
  data() {
    return {
    }
  }
}
</script>

<style lang="less">
.a-menu {
  text-align: left;
  & * {
    list-style: none;
  }
  ul {
    padding: 0;
    margin: 0;
  }
}
</style>
