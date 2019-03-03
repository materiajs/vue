<template>
  <span
    @click="action"
    class="tb-fa-wrapper"
    :class="{ 'has-action': action !== undefined }"
  >
    <i class="fa tb-fa" :class="[`fa-${icon}`, size]"></i>
    <slot />
  </span>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'Fa',
  props: {
    action: t.func,
    icon: t.string,
    size: t.oneOf(['small', 'large', 'extra-large']),
  },
};
</script>

<style scoped lang="scss">
  .tb-fa {
    font-size: 14px;
    min-width: 30px;
    text-align: center;
    &-wrapper {
      position: relative;
      &.has-action {
        cursor: pointer;
      }
    }
    &.large {
      font-size: 18px;
    }
    &.extra-large {
      font-size: 28px;
    }
  }
</style>
