<template>
  <div class="tb-flex-layout-builder">
    <template v-if="editMode">
      <builder-toolbar :id="id">
        Card
        <tb-spacer />
      </builder-toolbar>
    </template>
    <children-builder
      :repeat-index="repeatIndex"
      :array-bind="getArrayBind"
      :id="id"></children-builder>
  </div>
</template>

<script>
import { builder } from '@/mixins';
import BuilderToolbar from './BuilderToolbar.vue';
import ChildrenBuilder from './ChildrenBuilder.vue';

export default {
  name: 'FlexLayoutBuilder',
  mixins: [
    builder,
  ],
  components: {
    BuilderToolbar,
    ChildrenBuilder,
  },
};
</script>
