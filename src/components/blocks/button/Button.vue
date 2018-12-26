<template>
  <button @click="action" class="tb-button">
    <span>
      {{ text }}
    </span>
  </button>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'tb-button',
  props: {
    action: t.func,
    text: t.string,
  },
};
</script>

<style scoped lang="scss">
  .tb-button {
    background: $primary-color;
    border-radius: $border-radius-standard;
    border: none;
    box-shadow: $box-shadow-standard;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    outline: none;
    padding: 10px 15px;
    transition: $standard-transition;

    &:active {
      box-shadow: none;
      background: darken($primary-color, 5%);
    }
    &:focus{
      border-color:transparent!important;
      outline:none;
      outline-style: none;
    }
  }
</style>
