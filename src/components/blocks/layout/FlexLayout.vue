<template>
  <div
    class="tb-flex-layout"
    :class="[flexDirection]"
   :style="{ 'align-items': alignItems, 'flex-direction': flexDirection }">
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'Layout',
  props: {
    alignItems: t.string,
    flexDirection: t.oneOf(['row', 'column']).def('row'),
  },
};
</script>

<style scoped lang="scss">
  .tb-flex-layout {
    display: flex;
    justify-content: space-evenly;

    &.row {
      margin: 0 -5px;
      >* {
        margin: 0 5px;
      }
    }
    &.column {
      margin: -5px 0;
      >* {
        margin: 5px 0;
      }
    }
  }
</style>
