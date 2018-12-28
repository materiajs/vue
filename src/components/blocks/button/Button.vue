<template>
  <button
    @click="action"
    class="tb-button"
    :class="[type]">
    <span class="tb-button-text">
      {{ text }}
    </span>
    <slot />
  </button>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'tb-button',
  props: {
    action: t.func,
    text: t.string,
    type: t.oneOf(['basic', 'primary', 'cancel']).def('basic'),
  },
};
</script>

<style scoped lang="scss">
  .tb-button {
    border-radius: $border-radius-light;
    border: none;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    outline: none;
    padding: 10px 15px;
    transition: $standard-transition;

    &.primary {
      background: $primary-color;
      .tb-button-text {
        color: white;
      }
      &:active {
        background: darken($primary-color, 5%);
      }
    }
    &:hover {
      box-shadow: $box-shadow-light;
    }
    &:active {
      box-shadow: $box-shadow-extra-light;
    }
  }
</style>
