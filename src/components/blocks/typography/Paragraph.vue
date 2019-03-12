<template>
  <div class="tb-paragraph">
    <tb-padding :padding="padding">
      <slot />
    </tb-padding>
  </div>
</template>

<script>
import layout from '@/mixins/layout';

export default {
  name: 'Paragraph',
  mixins: [
    layout,
  ],
};
</script>

<style scoped lang="scss">
  .tb-paragraph {
    line-height: 1.5;
  }
</style>
