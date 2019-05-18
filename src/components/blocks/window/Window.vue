<template>
  <div class="tb-window" :style="{ 'height': minHeight }">
    <slot></slot>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'Window',
  data: () => ({
    minHeight: '200px',
  }),
  props: {
    value: t.number,
  },
  watch: {
    value() {
      this.$nextTick(() => {
        const match = this.$children
          .find(child => child.value === this.value);
        this.minHeight = `${match.$el.offsetHeight}px`;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .tb-window {
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
  }
</style>
