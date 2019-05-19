<template>
  <draggable
    :class="['list-group', 'mat-frame builder']"
    v-model="valueProp"
    v-bind="dragOptions"
    handle=".mat-handle"
    @start="isDragging = true"
    @end="isDragging = false"
  >
    <slot />
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';
import t from 'vue-types';

export default {
  name: 'Draggable',
  props: {
    value: t.array,
  },
  components: {
    draggable,
  },
  data: () => ({
    isDragging: false,
  }),
  computed: {
    valueProp: {
      get() {
        return this.value;
      },
      set(value) {
        console.debug('Settinh'); // TODO - Remove console output
        this.$emit('input', value);
      },
    },
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
  /deep/ .mat-handle {
    cursor: move !important;
  }
  /deep/ .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
</style>
