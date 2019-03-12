<template>
  <button
    @click="action"
    class="tb-button"
    :style="getElementStyle"
    :class="[color]">
    {{ text }}
    <div
      v-if="$slots.left"
      class="tb-button-slot tb-button-slot-left">
      <slot name="left" />
    </div>
    <slot />
    <div
      v-if="$slots.right"
      class="tb-button-slot tb-button-slot-right">
      <slot name="right" />
    </div>
  </button>
</template>

<script>
import t from 'vue-types';
import themeable from '@/mixins/themeable';

export default {
  name: 'tb-button',
  mixins: [
    themeable,
  ],
  props: {
    action: t.func,
    text: t.string,
  },
};
</script>

<style scoped lang="scss">
  .tb-button {
    align-items: center;
    border-radius: $border-radius-light;
    border: none;
    box-shadow: $box-shadow-light;
    cursor: pointer;
    display: inline-flex;
    font-size: 16px;
    outline: none;
    padding: 10px 15px;
    transition: $standard-transition;
    white-space: nowrap;

    >* {
      min-width: 15px;
    }

    &:active {
      box-shadow: $box-shadow-extra-light;
    }

    &.primary, &.warn {
      background: $primary-color;
      box-shadow: $box-shadow-heavy;
      &:active {
        box-shadow: $box-shadow-light;
      }
    }
    &-slot {
      &-right {
        margin-right: -5px;
        margin-left: 5px;
      }
      &-left {
        margin-left: -5px;
        margin-right: 5px;
      }
    }

    &:hover {
      filter: brightness(105%);
    }
  }
</style>
