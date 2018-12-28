<template>
  <div class="tb-list">
    <div
      v-for="(item, key) in items"
      :key="key"
      @click="item.onClick"
      class="tb-list-item" >
      <slot v-bind:item="item" />
    </div>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'List',
  props: {
    items: t.array,
  },
};
</script>

<style scoped lang="scss">
  .tb-list {
    &-search-box {
      padding: 5px;
    }
    &-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      min-height: 45px;
      padding: 0 15px;
      &:not(:last-child) {
        border-bottom: 1px solid $primary-color-light;
      }
      &:hover {
        background: lighten($primary-color-light, 10%);
      }
    }
  }
</style>
