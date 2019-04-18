<template>
  <div class="about">
    <h1>This is an about page</h1>
    <em>{{food}}</em>
  </div>
</template>

<script>
export default {
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  }
}
</script>


<style scoped>
.about {
  color: #000;
}
</style>