<template>
  <div class="tb-form tb-card">
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
import TbDivider from '@/components/blocks/form/FormDivider.vue';

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
    .actions {
      text-align: right;
    }
    .tb-divider {
      margin-bottom: 5px;
    }
    .tb-input {
      margin-bottom: 15px;
    }
    .actions {
      .tb-button {
        margin-left: 5px;
      }
    }
  }
</style>
