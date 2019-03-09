<template>
  <div class="tb-paragraph-component">
    <div v-if="!editMode">
      {{ value }}
    </div>
    <tb-input type="textarea" v-else v-model="value" />
  </div>
</template>

<script>
import { builder } from '@/mixins';

export default {
  name: 'ParagraphComponent',
  mixins: [
    builder,
  ],
};
</script>

<style scoped>

</style>
