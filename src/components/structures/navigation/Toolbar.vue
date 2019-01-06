<template>
  <div
    class="tb-toolbar"
    :class="{ dark }">
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'toolbar',
  props: {
    dark: t.bool.def(false),
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

    &.dark {
      color: white;
      box-shadow: $box-shadow-card;
      background: $primary-color-dark;
      .tb-nav-link {
        background: $primary-color-dark;
        /deep/:before {
          background: $primary-color-dark;
        }
      }
    }
  }
</style>
