<template>
  <div class="mat-grid-layout" :style="{ 'grid-template-columns': gridTemplateColumns }">
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'GridLayout',
  props: {
    gridTemplateColumns: t.string.def('280px 1fr'),
  },
};
</script>

<style scoped lang="scss">
  .mat-grid-layout {
    display: grid;
  }
</style>
