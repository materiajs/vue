<template>
  <div
    @click="$emit('click')"
    :class="{ dark }"
    class="mat-nav-link mat-flex-center mat-standard-transition"
  >
    <template v-if="href">
      <a :href="href" :target="target">
        <slot />
      </a>
    </template>
    <slot v-else />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'NavLink',
  props: {
    href: t.string,
    target: t.string,
  },
  computed: {
    dark() {
      return this.$parent.dark;
    },
  },
};
</script>

<style scoped lang="scss">
  .mat-nav-link {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    height: 100%;
    padding: 0 15px;
    position: relative;
    text-align: center;
    user-select: none;
    a {
      color: inherit;
      text-decoration: none;
    }
    &:hover {
      background: rgba(0,0,0,0.1);
    }

    &.dark:hover {
      &:before {
        background: rgba(255, 255, 255, 0.1);
      }
    }
    > * {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
</style>
