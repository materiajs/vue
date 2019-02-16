<template>
  <div class="tb-divider">
    <div class="tb-divider-line"></div>
    <div class="tb-divider-content">
      <slot />
    </div>
    <div class="tb-divider-line"></div>
  </div>
</template>

<script>
export default {
  name: 'tb-divider',
};
</script>

<style scoped lang="scss">
  .tb-divider {
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
