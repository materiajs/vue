<template>
  <mat-margin :margin="margin">
    <div
      class="mat-title"
      :class="{ [size]: size, subtitle }"
      :style="getElementStyle"
    >
      <mat-padding :padding="padding">
        <slot>
          {{ value }}
        </slot>
      </mat-padding>
    </div>
  </mat-margin>
</template>

<script>
import t from 'vue-types';
import layout from '../../../mixins/layout';
import display from '../../../mixins/display';
import themeable from '../../../mixins/themeable';

export default {
  name: 'Title',
  mixins: [
    display,
    layout,
    themeable,
  ],
  props: {
    value: t.string.def(''),
    size: t.oneOf(['xs', 'small', 'regular', 'large', 'xl']),
    subtitle: t.bool.def(false),
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";

  .mat-title {
    font-size: 2rem;
    margin-bottom: 10px;
    font-weight: bold;
    &.subtitle {
      color: $text-color-light!important
    }
    &.xs {
      font-size: 1.2rem;
    }
    &.small {
      font-size: 1.5rem;
    }
    &.large {
      font-size: 2.5rem;
    }
  }
</style>
