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
    minHeight: undefined,
  }),
  props: {
    value: t.number,
  },
  watch: {
    value: {
      handler() {
        this.$nextTick(() => {
          const match = this.$children
            .find(child => child.value === this.value);
          if (match) {
            this.minHeight = `${match.$el.offsetHeight}px`;
          }
        });
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .tb-window {
    position: relative;
    overflow: hidden;
    transition: all 0.2s ease;
  }
</style>
