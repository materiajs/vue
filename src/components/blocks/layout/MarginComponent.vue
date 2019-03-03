<template>
  <div class="tb-margin-component" :style="{ margin }">
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
