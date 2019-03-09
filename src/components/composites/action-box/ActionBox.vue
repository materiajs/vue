<template>
  <tb-transition
    transition-name="expand-collapse">
    <div
      v-if="value"
      :class="[position]"
      class="tb-action-box">
      <div
        class="tb-action-box-body tb-card-light">
        <slot />
      </div>
    </div>
  </tb-transition>
</template>

<script>
import t from 'vue-types';
import { ClickOutside } from '@/directives';

export default {
  name: 'tb-action-box',
  props: {
    position: t.oneOf(['bottom-left', 'bottom-right']).def('bottom-left'),
    value: t.bool.def(false),
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style scoped lang="scss">
  .tb-action-box {
    min-width: 320px;
    position: absolute;
    padding: 3px;
    padding-top: 7px;
    top: 100%;
    z-index: 100;
    &:before {
      content: '';
      display: inline-block;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-bottom: 7px solid #ccc;
      border-bottom-color: rgba(0, 0, 0, 0.1);
      position: absolute;
      top: 0;
      left: 7px;
    }

    &:after {
      content: '';
      display: inline-block;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid #fff;
      position: absolute;
      top: 1px;
      left: 8px;
    }

    &.bottom-right {
      right: 0;
      &:before {
        right: 7px;
        left: unset;
      }
      &:after {
        right: 8px;
        left: unset;
      }
    }
  }
</style>
