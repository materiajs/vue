<template>
  <div class="tb-flex-layout-builder">
    <template v-if="editMode">
      <builder-toolbar :id="id">
        Flex layout
        <tb-spacer />
        <tb-fa
          :action="onClickLayoutDirection"
          icon="bars"
          :rotate="(value.flexDirection === 'row' ? 90 : 0)"></tb-fa>
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
  methods: {
    onClickAdd() {
      this.addEmptyChild('tb-flex-item');
    },
    onClickLayoutDirection() {
      let { flexDirection } = this.value;
      flexDirection = flexDirection === 'row' ? 'column' : 'row';
      this.value = { flexDirection };
    },
  },
};
</script>

<style scoped lang="scss">
  .tb-flex-layout >* {
    flex: 1;
  }
</style>
