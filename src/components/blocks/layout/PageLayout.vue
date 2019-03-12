<template>
  <div
    class="tb-page-layout"
    :style="_getElementStyle">
    <slot />
  </div>
</template>

<script>
import themeable, { defaultAccentColor } from '@/mixins/themeable';

export default {
  name: 'PageLayout',
  mixins: [
    themeable,
  ],
  props: {
    darkColor: defaultAccentColor,
  },
  data: () => ({
    mounted: false,
  }),
  mounted() {
    this.mounted = true;
  },
  computed: {
    _getElementStyle() {
      let height;
      if (this.mounted) {
        height = window.innerHeight - this.$el.offsetTop;
      }
      return {
        ...this.getElementStyle,
        'min-height': height ? `${height}px` : undefined,
      };
    },
  },
};
</script>
