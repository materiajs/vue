<template>
  <div
    class="tb-container-wrapper"
    :style="_getStyle"
  >
    <div class="tb-container" :style="getLayoutStyle">
      <slot />
    </div>
  </div>
</template>

<script>
import themeable from '@/mixins/themeable';
import layout from '@/mixins/layout';
import display from '@/mixins/display';

export default {
  name: 'Container',
  mixins: [
    display,
    layout,
    themeable,
  ],
  computed: {
    _getStyle() {
      return {
        ...this.getElementStyle,
        ...this.getDisplayStyle,
      };
    },
  },
};
</script>

<style scoped lang="scss">
  .tb-container {
    margin: auto;
  }
</style>
