<template>
  <div class="tb-form">
    <slot name="header">
      <tb-divider v-if="title" :text="title" />
    </slot>
    <slot />
    <div
      v-if="showActions"
      class="actions">
      <tb-divider />
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
import t from 'vue-types';
import TbDivider from '@/components/blocks/dividers/Divider.vue';

export default {
  name: 'Form',
  components: {
    TbDivider,
  },
  props: {
    title: t.string,
  },
  computed: {
    showActions() {
      return this.$slots.actions !== undefined;
    },
  },
};
</script>

<style scoped lang="scss">
  .tb-form {
    background: white;
    border-radius: $border-radius-standard;
    box-shadow: $box-shadow-standard;
    padding: 15px;

    .actions {
      text-align: right;
    }
    .tb-divider {
      margin-bottom: 5px;
    }
    .tb-input {
      margin-bottom: 15px;
    }
  }
</style>
