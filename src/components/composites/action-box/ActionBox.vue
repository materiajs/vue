<template>
  <div
    :class="[position]"
    class="tb-action-box">
    <tb-transition-component
      transition-name="expand-collapse">
      <div
        v-if="value"
        class="tb-action-box-body tb-card-light">
        <slot />
      </div>
    </tb-transition-component>
  </div>
</template>

<script>
import t from 'vue-types';
import { ClickOutside } from '@/directives';
import { TbTransitionComponent } from '@/components/blocks';

export default {
  name: 'tb-action-box',
  props: {
    position: t.oneOf(['bottom-left', 'bottom-right']).def('bottom-left'),
    value: t.bool.def(false),
  },
  components: {
    TbTransitionComponent,
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style scoped lang="scss">
  .tb-action-box {
    position: absolute;
    margin-top: 7px;
    top: 100%;
    z-index: 100;
    &-body {
      &:before {
        content: '';
        display: inline-block;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid #ccc;
        border-bottom-color: rgba(0, 0, 0, 0.1);
        position: absolute;
        top: -7px;
      }

      &:after {
        content: '';
        display: inline-block;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid #fff;
        position: absolute;
        top: -6px;
      }
    }

    &.bottom-left {
      :before {
        left: 9px;
      }
      :after {
        left: 10px;
      }
    }

    &.bottom-right {
      right: 0;
      :before {
        right: 9px;
      }
      :after {
        right: 10px;
      }
    }
  }
</style>
