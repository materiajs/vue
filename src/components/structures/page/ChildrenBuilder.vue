<template>
  <tb-transition
    v-if="editMode"
    transition-name="expand-collapse">
    <component
      v-if="!isMinimized"
      v-bind="value"
      :wrapper="true"
      :edit-mode="editMode"
      :is="component.type === 'layout' ? getRootComponent : 'div'"
    >
      <draggable
        :class="['list-group', id !== 'root' ? 'tb-frame builder' : '']"
        v-model="getChildren"
        v-bind="dragOptions"
        handle=".tb-handle"
        @start="isDragging = true"
        @end="isDragging = false"
      >
        <template v-for="(child, key) in getChildren">
          <template v-for="(undefined, childRepeat) in (editMode ? [0] : getRepeatById(child))">
            <component
              class="children-builder-child"
              :is="getPageComponentByComponentId(getComponentById(child).componentId)"
              :id="child"
              :array-bind="getArrayBind"
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
          :is="getPageComponentByComponentId(getComponentById(child).componentId)"
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
import draggable from 'vuedraggable';
import { builder } from '@/mixins';

export default {
  name: 'ChildrenBuilder',
  mixins: [
    builder,
  ],
  components: {
    draggable,
  },
  data: () => ({
    isDragging: false,
  }),
  computed: {
    dragOptions() {
      return {
        animation: 300,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      };
    },
  },
};
</script>

<style scoped lang="scss">
  .list-group {
    min-height: 30px;
    padding: 15px;
  }
  .children-builder-child {
    margin-bottom: 15px;
  }
  /deep/ .tb-handle {
    cursor: move !important;
  }
  /deep/ .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
</style>
