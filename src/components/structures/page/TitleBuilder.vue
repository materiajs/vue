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
    <template
      v-else
      v-for="(undefined, key) in (editMode ? [0] : getRepeat)">
      <tb-title
        :key="key"
        size="large"
        :value="getValue(key)"></tb-title>
    </template>
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
          const [key, prop] = this.value.value.split('.');
          return this.dataArrays[key][this.repeatIndex][prop];
        }
        return this.pageData[this.value.value].toString();
      }
      return this.component.getValue(this.component);
    },
  },
  methods: {
    getValue(repeatIndex) {
      if (this.isValueDynamic) {
        if (this.value.type === 'array') {
          const [key, prop] = this.value.value.split('.');
          const index = this.getArrayBind[key].index || repeatIndex;
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
