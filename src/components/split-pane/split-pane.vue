<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{ width: leftOffsetPercent, paddingRight: `${triggerWidth / 2}px` }">
      <slot name="left"></slot>
      <button @click="handleClick">点击</button>
    </div>
    <div class="pane-trigger-con" @mousemove="handleMousemove" @mousedown="handleMousedown" :style="{ left: triggerLeft, width: `${triggerWidth}px` }"></div>
    <div class="pane pane-right" :style="{ left: leftOffsetPercent, paddingLeft: `${triggerWidth / 2}px` }">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data() {
    return {
      canMove: false,
      initOffset: 0
    }
  },
  computed: {
    leftOffsetPercent() {
      return `${this.value * 100}%`
    },
    triggerLeft() {
      return `calc(${this.leftOffsetPercent} - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    handleClick() {
      this.value -= 0.02
    },
    handleMousedown(e) {
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      this.initOffset = e.pageX - e.srcElement.getBoundingClientRect().left
      this.canMove = true
    },
    handleMouseup() {
      this.canMove = false
    },
    handleMousemove(e) {
      if (!this.canMove) return
      const outerRect = this.$refs.outer.getBoundingClientRect()
      let offsetPercent = (e.pageX - this.initOffset + this.triggerWidth / 2 - outerRect.left) / outerRect.width
      console.log(outerRect)
      console.log(offsetPercent)
      if (offsetPercent < this.min) offsetPercent = this.min
      if (offsetPercent > this.max) offsetPercent = this.max
      // this.$emit('input', offsetPercent)
      // this.value = offsetPercent
      this.$emit('update:value', offsetPercent)
    }
  }
}
</script>

<style lang="less" scoped>
.split-pane-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  text-align: left;
  .pane {
    position: absolute;
    height: 100%;
    top: 0;
    &-left {
      background: palevioletred;
    }
    &-right {
      right: 0;
      bottom: 0;
      background: paleturquoise;
    }
    &-trigger-con {
      height: 100%;
      background: red;
      position: absolute;
      top: 0;
      z-index: 10;
      user-select: none;
      cursor: col-resize;
    }
  }
}
</style>
