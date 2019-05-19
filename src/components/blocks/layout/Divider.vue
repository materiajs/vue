<template>
  <div class="mat-divider">
    <div class="mat-divider-line"></div>
    <div class="mat-divider-content">
      <slot />
    </div>
    <div class="mat-divider-line"></div>
  </div>
</template>

<script>
export default {
  name: 'mat-divider',
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";
  .mat-divider {
    align-items: center;
    color: $typography-primary-text-color;
    display: flex;
    padding: 15px 0;
    &-line {
      background: $divider-grey;
      flex: 1;
      height: 1px;
    }
    &-content {
      padding: 0 15px;
    }
  }
</style>
