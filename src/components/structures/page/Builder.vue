<template>
  <component
    v-bind="value"
    :wrapper="true"
    :edit-mode="editMode"
    :is="(!editMode && getRootComponent) ? getRootComponent : 'div'"
  >
    <children-builder
      v-if="editMode"
      :repeat-index="repeatIndex"
      :array-bind="getArrayBind"
      :edit-mode="editMode"
      :id="id"></children-builder>
    <template
      v-else
      v-for="(child, key) in getChildren">
      <template v-for="(undefined, childRepeat) in (editMode ? [0] : getRepeatById(child))">
        <component
          :is="getPageComponentById(child)"
          :id="child"
          :array-bind="getArrayBind"
          :edit-mode="editMode"
          :repeat-index="childRepeat"
          :key="`${key}${childRepeat}`"
        />
      </template>
    </template>
  </component>
</template>

<script>
import { builder } from '@/mixins';
import ChildrenBuilder from './ChildrenBuilder.vue';

export default {
  name: 'Builder',
  mixins: [
    builder,
  ],
  components: {
    ChildrenBuilder,
  },
};
</script>
