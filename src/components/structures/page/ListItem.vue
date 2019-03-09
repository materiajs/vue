<template>
  <div class="tb-list-item">
    <component-builder
      :component="component"
    />
  </div>
</template>

<script>
import { builder } from '@/mixins';
import ComponentBuilder from './ComponentBuilder.vue';

export default {
  name: 'ListItem',
  mixins: [
    builder,
  ],
  components: {
    ComponentBuilder,
  },
};
</script>

<style scoped>

</style>
