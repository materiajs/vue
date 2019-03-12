<template>
  <div class="tb-title-builder">
    <template v-if="editMode" >
      <builder-toolbar
        :array-bind="getArrayBind"
        :id="id">
        Image
        <tb-spacer />
      </builder-toolbar>
      <tb-padding padding="15px 0 15px">
        <tb-input v-if="isValueDynamic" :value="dataOptionsDisplay" />
        <tb-input
          v-else
          :value="value.src"
          @input="inputVal => { value = { src: inputVal }; }" />
      </tb-padding>
    </template>
    <tb-image
      v-else
      v-bind="value"
      :value="textValue"></tb-image>
  </div>
</template>

<script>
import { builder } from '@/mixins';
import BuilderToolbar from './BuilderToolbar.vue';

export default {
  name: 'ImageBuilder',
  mixins: [
    builder,
  ],
  components: {
    BuilderToolbar,
  },
};
</script>

<style scoped>

</style>
