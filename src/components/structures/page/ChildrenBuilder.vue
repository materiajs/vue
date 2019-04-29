<template>
  <div>
    <builder-toolbar :id="id">
      {{ component.name || component.componentId }}
      <tb-spacer />
    </builder-toolbar>
    <tb-transition
      v-if="editMode"
      transition-name="expand-collapse">
      <component
        v-if="!isMinimized"
        v-bind="value"
        :wrapper="true"
        :edit-mode="editMode"
        :dark="dark"
        :is="component.type === 'layout' ? getRootComponent : 'div'"
      >
        <draggable v-model="getChildren">
          <template v-for="(child, key) in getChildren">
            <template v-for="(undefined, childRepeat) in (editMode ? [0] : getRepeatById(child))">
              <component
                class="children-builder-child"
                :is="getPageComponentById(child)"
                :id="child"
                :array-bind="getArrayBind"
                :dark="dark"
                :edit-mode="editMode"
                :repeat-index="childRepeat"
                :key="`${key}${childRepeat}`"
              />
            </template>
          </template>
          <template v-if="getChildren.length === 0">
            Empty
          </template>
        </draggable>
      </component>
    </tb-transition>
    <component
      v-else
      v-bind="value"
      :is="getRootComponent ? getRootComponent : 'div'"
    >
      <template v-for="(child, key) in getChildren">
        <template v-for="(undefined, childRepeat) in (editMode ? [0] : getRepeatById(child))">
          <component
            :is="getPageComponentById(child)"
            :id="child"
            :array-bind="getArrayBind"
            :edit-mode="editMode"
            :dark="dark"
            :repeat-index="childRepeat"
            :key="`${key}${childRepeat}`"
          />
        </template>
      </template>
    </component>
  </div>
</template>

<script>
import { builder } from '@/mixins';
import Draggable from '@/components/blocks/layout/Draggable.vue';
import BuilderToolbar from './BuilderToolbar.vue';

export default {
  name: 'ChildrenBuilder',
  mixins: [
    builder,
  ],
  components: {
    BuilderToolbar,
    Draggable,
  },
};
</script>

<style scoped lang="scss">
  .children-builder-child {
    margin-bottom: 15px;
  }
</style>
