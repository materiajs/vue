<template>
  <div
    :class="{ dark }"
    class="tb-nav-link tb-flex-center">
    <div class="tb-nav-link-content">
      <slot>
        Nav Linkd
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavLink',
  computed: {
    dark() {
      return this.$parent.dark;
    },
  },
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
      background: rgba(0,0,0,0);
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
        background: rgba(0,0,0,0.1);
      }
    }
    &.dark:hover {
      &:before {
        background: rgba(255, 255, 255, 0.1);
      }
    }
    &-content {
      z-index: 10;
    }
  }
</style>
