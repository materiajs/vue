<template>
  <div class="mat-margin-component" :style="{ margin }">
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'MarginComponent',
  props: {
    margin: t.string,
  },
};
</script>
