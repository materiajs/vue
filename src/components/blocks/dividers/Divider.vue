<template>
  <div class="tb-divider">
    <div class="tb-divider-mini-divider" />
    <div v-if="text" class="tb-divider-title">
      {{ text }}
    </div>
    <div class="tb-divider-divider" />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'tb-divider',
  props: {
    text: t.string.def(''),
  },
};
</script>

<style scoped lang="scss">
  .tb-divider {
    align-items: center;
    color: $typography-primary-text-color;
    display: flex;
    padding: 15px 0;
    &-title {
      color: $primary-color-dark;
      font-size: 20px;
      padding: 0 5px;
    }
    &-divider, &-mini-divider {
      background: $divider-primary;
      height: 1px;
    }
    &-divider {
      flex: 1;
    }
    &-mini-divider {
      width: 15px;
    }
  }
</style>
