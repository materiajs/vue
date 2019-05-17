<template>
  <span
    @click="action"
    class="tb-fa-wrapper tb-standard-transition"
    :style="getStyle"
  >
    <i class="fa tb-fa" :class="[`fa-${icon}`, size]"></i>
    <slot />
  </span>
</template>

<script>
import t from 'vue-types';
import themeable from '../../../mixins/themeable';

export default {
  name: 'Fa',
  mixins: [
    themeable,
  ],
  props: {
    action: t.func,
    cursor: t.string.def('pointer'),
    icon: t.string,
    size: t.oneOf(['small', 'large', 'extra-large']),
    rotate: t.number.def(0),
  },
  computed: {
    getStyle() {
      return {
        color: this.background,
        transform: this.rotate ? `rotate(${this.rotate}deg)` : undefined,
        cursor: this.cursor,
      };
    },
  },
};
</script>

<style scoped lang="scss">
  .tb-fa {
    font-size: 14px;
    min-width: 30px;
    text-align: center;
    min-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-wrapper {
      position: relative;
    }
    &.small {
      font-size: 8px;
    }
    &.large {
      font-size: 18px;
    }
    &.extra-large {
      font-size: 28px;
    }
  }
</style>
