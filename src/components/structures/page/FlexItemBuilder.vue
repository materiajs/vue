<template>
    <tb-flex-item>
      <template v-if="editMode">
        <builder-toolbar :id="id">
          Flex item
          <tb-spacer />
        </builder-toolbar>
      </template>
      <template
        v-for="(undefined, repeatKey) in (editMode ? [1] : getRepeat)"
        :flex-direction="flexDirection">
        <template v-for="(child, key) in getChildren">
          <component-builder
            :array-bind="getArrayBind"
            :id="child"
            :repeat-index="repeatKey"
            :repeat-on="component.repeat"
            :key="`${child}-${key}${repeatKey}`"/>
        </template>
      </template>
    </tb-flex-item>
</template>

<script>
import t from 'vue-types';
import ComponentBuilder from './ComponentBuilder.vue';
import { builder } from '@/mixins';
import page from '.';
import BuilderToolbar from './BuilderToolbar.vue';

export default {
  name: 'FlexItemBuilder',
  mixins: [
    builder,
  ],
  data: () => ({
    page,
  }),
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
