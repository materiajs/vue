<template>
  <div
    class="mat-side-bar"
    :style="getElementStyle"
  >
    <slot />
  </div>
</template>

<script>
import themeable from '../../../mixins/themeable';

export default {
  name: 'SideBar',
  mixins: [
    themeable,
  ],
};
</script>

<style scoped lang="scss">
  .mat-side-bar {
    box-shadow: 1px 2px 4px -1px rgba(0, 0, 0, 0.2), 1px 4px 5px 0px rgba(0, 0, 0, 0.14), 2px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
</style>
