<template>
  <div class="tb-form-divider">
    <div class="tb-form-divider-mini-divider"></div>
    <div v-if="text" class="tb-form-divider-title">
      {{ text }}
    </div>
    <div class="tb-form-divider-divider"></div>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'tb-form-divider',
  props: {
    text: t.string.def(''),
  },
};
</script>

<style scoped lang="scss">
  .tb-form-divider {
    align-items: center;
    display: flex;
    margin: 0 -15px;
    padding: 15px 0;
    &-title {
      font-size: 20px;
      padding: 0 5px;
    }
    &-divider, &-mini-divider {
      background: $divider-grey;
      height: 1px;
    }
    &-divider {
      flex: 1;
    }
    &-mini-divider {
      width: 25px;
    }
  }
</style>
