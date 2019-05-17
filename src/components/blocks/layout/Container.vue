<template>
  <div class="tb-container" :style="_getStyle">
    <slot />
  </div>
</template>

<script>
import themeable from '../../../mixins/themeable';
import stylable from '../../../mixins/stylable';

export default {
  name: 'Container',
  mixins: [
    stylable,
    themeable,
  ],
  computed: {
    _getStyle() {
      return {
        ...this.getElementStyle,
        ...this.styleOptions,
      };
    },
  },
};
</script>
