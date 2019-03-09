<template>
  <div class="tb-title-builder">
    <template v-if="editMode" >
      <builder-toolbar
        :array-bind="getArrayBind"
        :id="id">
        Title
        <tb-spacer />
      </builder-toolbar>
      <tb-padding padding="0 0 15px">
        <tb-input v-if="isValueDynamic" :value="dataOptionsDisplay" />
        <tb-input v-else :value="value.value" @input="inputVal => { value = { value: inputVal }; }" />
      </tb-padding>
    </template>
    <tb-title
      v-else
      size="large"
      :value="titleValue"></tb-title>
  </div>
</template>

<script>
import { builder } from '@/mixins';
import BuilderToolbar from './BuilderToolbar.vue';

export default {
  name: 'TitleBuilder',
  mixins: [
    builder,
  ],
  components: {
    BuilderToolbar,
  },
  computed: {
    titleValue() {
      if (this.isValueDynamic) {
        if (this.value.type === 'array') {
          console.debug(this.getArrayBind); // TODO - Remove console output
          const [key, prop] = this.value.value.split('.');
          const index = this.getArrayBind[key].index;
          return this.dataArrays[key][index][prop];
        }
        return this.pageData[this.value.value].toString();
      }
      return this.component.getValue(this.component);
    },
  },
};
</script>

<style scoped>

</style>
