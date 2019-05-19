<template>
  <div class="mat-image">
    <img :src="src" :alt="alt">
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'ImageComponent',
  props: {
    src: t.string,
    alt: t.string,
  },
};
</script>

<style scoped lang="scss">
  .mat-image {
    display: flex;
    height: 240px;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
</style>
