<template>
  <tb-margin :margin="margin" :style="getDisplayStyle">
    <div class="tb-card" :style="getElementStyle">
      <div class="tb-card-layout" :style="getLayoutStyle">
        <slot />
      </div>
    </div>
  </tb-margin>
</template>

<script>
import themeable, { defaultAccentColor } from '@/mixins/themeable';
import layout from '@/mixins/layout';
import display from '@/mixins/display';

export default {
  name: 'Card',
  mixins: [
    display,
    layout,
    themeable,
  ],
  props: {
    darkColor: defaultAccentColor,
  },
};
</script>

<style scoped lang="scss">
</style>
