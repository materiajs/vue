<template>
  <div class="tb-grid-layout" :style="{ 'grid-template-columns': gridTemplateColumns }">
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'GridLayout',
  props: {
    columns: t.oneOfType([t.number, t.string]),
  },
  computed: {
    gridTemplateColumns() {
      return `repeat(${this.columns}, 1fr)`;
    },
  },
};
</script>

<style scoped lang="scss">
  .tb-grid-layout {
    display: grid;
    grid-gap: 15px;
  }
</style>
