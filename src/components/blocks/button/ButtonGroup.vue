<template>
  <div class="mat-button-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
};
</script>

<style scoped lang="scss">
  .mat-button-group {
    white-space: nowrap;
    /deep/ .mat-button {
      background: #212121;
      box-shadow: none;
      border: 1px solid #f3f3f3;

      &:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: none;
      }
      &:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
</style>
