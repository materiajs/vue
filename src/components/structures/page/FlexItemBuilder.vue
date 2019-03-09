<template>
  <tb-flex-item>
    <template v-if="editMode">
      <builder-toolbar :id="id">
        Flex item
        <tb-spacer />
      </builder-toolbar>
    </template>
    <template v-for="(child, key) in getChildren">
      <template v-for="(undefined, childRepeat) in (editMode ? [0] : getRepeatById(child))">
        <component
          :is="getPageComponentByComponentId(getComponentById(child).componentId)"
          :id="child"
          :array-bind="getArrayBind"
          :edit-mode="editMode"
          :repeat-index="childRepeat"
          :key="childRepeat"
        />
      </template>
    </template>
  </tb-flex-item>
</template>

<script>
import t from 'vue-types';
import ComponentBuilder from './ComponentBuilder.vue';
import { builder } from '@/mixins';
import BuilderToolbar from './BuilderToolbar.vue';

export default {
  name: 'FlexItemBuilder',
  mixins: [
    builder,
  ],
  components: {
    BuilderToolbar,
    ComponentBuilder,
  },
  props: {
    flex: t.oneOfType([t.string, t.number]),
    childComponent: t.any,
  },
};
</script>

<style scoped>

</style>
