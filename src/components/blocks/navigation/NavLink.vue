<template>
  <div class="tb-nav-link tb-flex-center">
    <div class="tb-nav-link-content">
      <slot>
        Nav Link
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavLink',
};
</script>

<style scoped lang="scss">
  .tb-nav-link {
    cursor: pointer;
    height: 100%;
    padding: 0 15px;
    position: relative;
    text-align: center;

    &:before {
      background: white;
      content: "";
      position: absolute;
      top: 0;
      transition: $standard-transition;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &:hover {
      &:before {
        filter: brightness(90%);
      }
    }

    &-content {
      z-index: 10;
    }
  }
</style>
