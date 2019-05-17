<template>
  <div
    class="tb-list"
    :class="{ bordered }"
    :style="getElementStyle">
    <slot>
      <div
        v-for="(item, key) in items"
        :key="key"
        @click="item.onClick"
        class="tb-list-item" >
        <slot name="item" v-bind:item="item" />
      </div>
    </slot>
  </div>
</template>

<script>
import t from 'vue-types';
import themeable from '../../../mixins/themeable';

export default {
  name: 'List',
  mixins: [
    themeable,
  ],
  props: {
    items: t.array,
    bordered: t.bool.def(false),
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";
  .tb-list {
    &.bordered {
      border: 1px solid $primary-color-light;
    }
    &-search-box {
      padding: 5px;
    }
    >* {
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
