<template>
 <div>
   <component
     :is="getComponent"
     :id="id"
     :array-bind="getArrayBindWithRepeat()"
     v-bind="component.props"
     :edit-mode="editMode"
   />
 </div>
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
    repeatIndex: t.any,
  },
  methods: {
    getArrayBindWithRepeat() {
      if (this.component.repeat) {
        const res = cloneDeep(this.getArrayBind);
        res[this.component.repeat].index = this.repeatIndex;
        console.debug('RES C ', res); // TODO - Remove console output
        return res;
      }
      return cloneDeep(this.getArrayBind);
    },
  },
};
</script>

<style scoped>

</style>
