<template>
  <div
    class="tb-toolbar"
    :class="[shadow ? 'shadow' : '', size]"
    :style="getElementStyle">
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';
import themeable, { defaultPrimaryColor } from '@/mixins/themeable';

export default {
  name: 'toolbar',
  mixins: [
    themeable,
  ],
  props: {
    color: defaultPrimaryColor,
    shadow: t.bool.def(true),
    size: t.oneOf(['small', 'large']),
  },
};
</script>

<style scoped lang="scss">
  .tb-toolbar {
    padding: 0 15px;
    position: relative;
    display: flex;
    height: 60px;
    align-items: center;
    color: white;

    &.small {
      height: 45px;
    }
    &.large {
      height: 75px;
    }
    &.shadow {
      box-shadow: $box-shadow-heavy;
      z-index: 10;
    }
  }
</style>
