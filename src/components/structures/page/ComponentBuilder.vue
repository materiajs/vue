<template>
 <component
   :is="getComponent"
   :id="id"
   :array-bind="getArrayBindWithRepeat()"
   v-bind="component.props"
   :edit-mode="editMode"
   :repeat-index="repeatIndex"
 />
</template>

<script>
import t from 'vue-types';
import { builder } from '@/mixins';
import { cloneDeep } from 'lodash';

export default {
  name: 'ComponentBuilder',
  mixins: [
    builder,
  ],
  props: {
    repeatOn: t.string,
    repeatIndex: t.any,
  },
  methods: {
    getArrayBindWithRepeat() {
      const res = cloneDeep(this.getArrayBind);
      if (this.repeatOn) {
        res[this.repeatOn].index = this.repeatIndex;
      }
      return res;
    },
  },
};
</script>

<style scoped>

</style>
