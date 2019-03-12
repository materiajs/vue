<template>
  <div class="tb-side-bar-item">
    Test
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SideBarItem',
};
</script>

<style scoped lang="scss">
  .tb-side-bar-item {
    padding: 15px;
    display: block;
    border-bottom: 1px solid #bbdefb;
  }
</style>
