<template>
  <div class="mat-card" :style="_getStyle">
    <slot />
  </div>
</template>

<script>
import themeable, { defaultAccentColor } from '../../../mixins/themeable';
import stylable from '../../../mixins/stylable';

export default {
  name: 'Card',
  mixins: [
    stylable,
    themeable,
  ],
  props: {
    darkColor: defaultAccentColor,
  },
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

<style scoped lang="scss">
</style>
