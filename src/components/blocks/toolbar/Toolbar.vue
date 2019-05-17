<template>
  <div
    class="tb-toolbar"
    :class="[shadow ? 'tb-box-shadow-heavy' : '', size]"
    :style="_getStyle">
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';
import { defaultPrimaryColor } from '../../../mixins/themeable';
import { position, themeable } from '../../../mixins';

export default {
  name: 'toolbar',
  mixins: [
    themeable,
    position,
  ],
  props: {
    color: defaultPrimaryColor,
    shadow: t.bool.def(true),
    size: t.oneOf(['xs', 'small', 'large']),
  },
  computed: {
    _getStyle() {
      return {
        ...this.getElementStyle,
        ...this.getPositionStyle,
      };
    },
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

    &.xs {
      height: 40px;
      font-size: 15px;
    }
    &.small {
      height: 45px;
    }
    &.large {
      height: 75px;
    }
    &.tb-box-shadow-heavy {
      z-index: 10;
    }
    >* {
      height: 100%;
    }
  }
</style>
