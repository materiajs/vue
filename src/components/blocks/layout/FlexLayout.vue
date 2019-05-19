<template>
  <div
    :class="[flexDirection, wrapper ? 'mat-flex-layout-wrapper' : 'mat-flex-layout']"
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
    wrapper: t.bool.def(false),
  },
};
</script>

<style scoped lang="scss">
  .mat-flex-layout-wrapper {
    display: flex;
    /deep/ >* {
      display: flex;
      flex: 1;
      justify-content: space-evenly;
      >* {
        flex: 1;
      }
    }
    &.row /deep/ >* {
      flex-direction: row;
    }
    &.column /deep/ >* {
      flex-direction: column;
    }
  }
  .mat-flex-layout {
    display: flex;
    justify-content: space-evenly;
  }
</style>
