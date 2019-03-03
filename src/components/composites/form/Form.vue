<template>
  <div class="tb-form tb-card" :style="getDarkElementStyle">
    <slot />
  </div>
</template>

<script>
import themeable, { defaultAccentColor } from '@/mixins/themeable';

export default {
  name: 'Form',
  mixins: [
    themeable,
  ],
  props: {
    darkColor: defaultAccentColor,
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
    .tb-input, tb-select, .tb-toolbar {
      margin-bottom: 15px;
    }
    .actions {
      .tb-button {
        margin-left: 5px;
      }
    }
  }
</style>
