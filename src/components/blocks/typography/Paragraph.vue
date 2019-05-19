<template>
  <div class="mat-paragraph">
    <mat-padding :padding="padding">
      <slot />
    </mat-padding>
  </div>
</template>

<script>
import layout from '../../../mixins/layout';

export default {
  name: 'Paragraph',
  mixins: [
    layout,
  ],
};
</script>

<style scoped lang="scss">
  .mat-paragraph {
    line-height: 1.5;
  }
</style>
