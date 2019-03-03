<template>
  <div class="tb-flex-item" :style="{ flex }">
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'FlexItem',
  props: {
    flex: t.oneOfType([t.number, t.string]).def(1),
  },
};
</script>
