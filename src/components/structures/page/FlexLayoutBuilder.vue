<template>
  <div class="tb-flex-layout-builder" :class="{ 'tb-frame builder': editMode }">
    <template v-if="editMode">
      <builder-toolbar :id="id">
        Flex layout
        <tb-spacer />
        <tb-fa
          :action="onClickLayoutDirection"
          icon="bars"
          :rotate="(flexDirection === 'row' ? 90 : 0)"></tb-fa>
      </builder-toolbar>
    </template>
    <tb-flex-layout
      v-for="(undefined, repeatKey) in (editMode ? [1] : getRepeat)"
      :key="repeatKey"
      :flex-direction="flexDirection">
      <template v-for="(child, key) in getChildren">
        <component-builder
          :array-bind="getArrayBind"
          :id="child"
          :repeat-index="repeatKey"
          :repeat-on="component.repeat"
          :key="`${child}-${key}${repeatKey}`"/>
      </template>
    </tb-flex-layout>
  </div>
</template>

<script>
import ComponentBuilder from './ComponentBuilder.vue';
import { builder } from '@/mixins';
import page from '.';
import BuilderToolbar from './BuilderToolbar.vue';

export default {
  name: 'FlexLayoutBuilder',
  mixins: [
    builder,
  ],
  data: () => ({
    flexDirection: 'row',
    page,
  }),
  components: {
    BuilderToolbar,
    ComponentBuilder,
  },
  methods: {
    onClickAdd() {
      this.addEmptyChild('tb-flex-item');
    },
    onClickLayoutDirection() {
      this.flexDirection = this.flexDirection === 'row' ? 'column' : 'row';
    },
  },
};
</script>

<style scoped lang="scss">
  .tb-flex-layout >* {
    flex: 1;
  }
</style>
