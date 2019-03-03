<template>
  <div class="tb-form-header" :style="getElementStyle">
    <slot />
  </div>
</template>

<script>
import { default as themeable, defaultPrimaryColor } from '@/mixins/themeable';

export default {
  name: 'FormHeader',
  props: {
    color: defaultPrimaryColor,
  },
  mixins: [
    themeable,
  ],
};
</script>

<style scoped lang="scss">
  .tb-form-header {
    padding: 15px;
    margin: -15px -15px 15px;
    background: #78909c;
    box-shadow: $box-shadow-standard;
    color: white;
  }
</style>
