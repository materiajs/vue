<template>
  <div class="tb-builder">
    <template v-if="editMode">
      <builder-toolbar :id="id">
        {{ component.name }}
        <tb-spacer />
      </builder-toolbar>
    </template>
    <children-builder
      :repeat-index="repeatIndex"
      :array-bind="getArrayBind"
      :edit-mode="editMode"
      :id="id"></children-builder>
  </div>
</template>

<script>
import { builder } from '@/mixins';
import BuilderToolbar from './BuilderToolbar.vue';
import ChildrenBuilder from './ChildrenBuilder.vue';

export default {
  name: 'Builder',
  mixins: [
    builder,
  ],
  components: {
    BuilderToolbar,
    ChildrenBuilder,
  },
};
</script>
