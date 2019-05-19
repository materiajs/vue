<template>
  <button
    @click="action"
    class="mat-button"
    :style="_getElementStyle"
    :class="[color]">
    {{ text }}
    <div
      v-if="$slots.left"
      class="mat-button-slot mat-button-slot-left">
      <slot name="left" />
    </div>
    <slot />
    <div
      v-if="$slots.right"
      class="mat-button-slot mat-button-slot-right">
      <slot name="right" />
    </div>
  </button>
</template>

<script>
import t from 'vue-types';
import themeable from '../../../mixins/themeable';

export default {
  name: 'mat-button',
  mixins: [
    themeable,
  ],
  props: {
    action: t.func,
    text: t.string,
  },
  computed: {
    _getElementStyle() {
      return {
        ...this.getElementStyle,
        background: (this.background !== null ? this.background : '#FFF'),
      };
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";
  .mat-button {
    align-items: center;
    border-radius: $border-radius-light;
    border: none;
    cursor: pointer;
    display: inline-flex;
    font-size: 16px;
    height: 35px;
    outline: none;
    padding: 0 10px;
    transition: $standard-transition;
    white-space: nowrap;

    >* {
      min-width: 15px;
    }

    box-shadow: $box-shadow-light;
    &:active {
      box-shadow: $box-shadow-extra-light;
    }
    &-slot {
      &-right {
        margin-right: -10px;
      }
      &-left {
        margin-left: -10px;
      }
    }
  }
</style>
