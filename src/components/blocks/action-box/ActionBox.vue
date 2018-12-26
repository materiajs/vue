<template>
  <div class="tb-action-box">
    <div
      v-if="open"
      class="tb-action-box-body">
      Body
    </div>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'tb-action-box',
  props: {
    open: t.bool.def(false),
  },
};
</script>

<style scoped lang="scss">
  .tb-action-box {
    position: relative;
    &-body {
      position: absolute;
    }
  }
</style>
