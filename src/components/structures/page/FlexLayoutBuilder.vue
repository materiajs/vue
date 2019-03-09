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
    <tb-flex-layout :flex-direction="flexDirection">
      <template v-for="(child, key) in getChildren">
        <template v-for="(undefined, childRepeat) in (editMode ? [0] : getRepeatById(child))">
          <component
            :is="getPageComponentByComponentId(getComponentById(child).componentId)"
            :id="child"
            :array-bind="getArrayBind"
            :edit-mode="editMode"
            :repeat-index="childRepeat"
            :key="`${key}${childRepeat}`"
          />
        </template>
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
