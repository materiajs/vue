<template>
  <div class="tb-flex-layout" :style="{ 'align-items': alignItems }">
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'Layout',
  props: {
    alignItems: t.string,
  },
};
</script>

<style scoped lang="scss">
  .tb-flex-layout {
    display: flex;
    justify-content: space-evenly;
    margin: 0 -5px;

    >* {
      margin: 0 5px;
    }
  }
</style>
