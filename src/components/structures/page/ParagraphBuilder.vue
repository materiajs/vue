<template>
  <div class="tb-paragraph-builder">
    <template v-if="editMode" >
      <builder-toolbar
        :array-bind="getArrayBind"
        :id="id">
        Paragraph
        <tb-spacer />
      </builder-toolbar>
      <tb-padding padding="15px 0 15px">
        <tb-input type="textarea" v-if="isValueDynamic" :value="dataOptionsDisplay" />
        <tb-input
          v-else
          type="textarea"
          :value="value.value"
          @input="inputVal => { value = { value: inputVal }; }" />
      </tb-padding>
    </template>
    <tb-paragraph
      v-else
      v-bind="value"
    >
      {{ textValue }}
    </tb-paragraph>
  </div>
</template>

<script>
import { builder } from '@/mixins';
import BuilderToolbar from './BuilderToolbar.vue';

export default {
  name: 'ParagraphComponent',
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
