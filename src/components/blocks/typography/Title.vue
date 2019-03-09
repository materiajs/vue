<template>
  <div class="tb-title" :class="[size]">
    <slot>
      {{ value }}
    </slot>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'Title',
  props: {
    value: t.string.def(''),
    size: t.oneOf(['xs', 'small', 'large', 'xl']),
  },
};
</script>

<style scoped lang="scss">
  .tb-title {
    font-size: 2rem;
    &.small {
      font-size: 1.5rem;
    }
    &.large {
      font-size: 2.5rem;
    }
  }
</style>
