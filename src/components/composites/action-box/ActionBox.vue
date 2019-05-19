<template>
  <div class="mat-action-box-wrapper">
    <div
      v-if="value"
      :class="[position, size]"
      class="mat-action-box">
      <div
        :style="getElementStyle"
        v-on-clickaway="onClickOutside"
        class="mat-action-box-body mat-card-light">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import t from 'vue-types';
import themeable from '@/mixins/themeable';
import sizeable from '@/mixins/sizeable';

export default {
  name: 'mat-action-box',
  mixins: [
    clickaway,
    themeable,
    sizeable,
  ],
  props: {
    position: t.oneOf(['bottom-left', 'bottom-right']).def('bottom-left'),
    value: t.bool.def(false),
  },
  methods: {
    onClickOutside() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped lang="scss">
  .mat-action-box {
    min-width: 320px;
    position: absolute;
    padding: 3px;
    padding-top: 7px;
    top: 100%;
    z-index: 100;
    &-body {
      box-shadow: $box-shadow-heavy;
      overflow: hidden;
    }
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
    &.large {
      min-width: 480px;
    }
  }
</style>
