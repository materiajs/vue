<template>
  <div class="tb-title-builder">
    <template v-if="editMode" >
      <builder-toolbar
        :array-bind="getArrayBind"
        :id="id">
        Title
        <tb-spacer />
      </builder-toolbar>
      <tb-transition transition-name="expand-collapse">
        <div v-if="!isMinimized">
          <tb-padding padding="15px 0 15px">
            <tb-input v-if="isValueDynamic" :value="dataOptionsDisplay" />
            <tb-input
              v-else
              :value="value.value"
              @input="inputVal => { value = { value: inputVal }; }" />
          </tb-padding>
        </div>
      </tb-transition>
    </template>
    <tb-title
      v-else
      v-bind="value"
      :value="textValue"></tb-title>
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
};
</script>

<style scoped>

</style>
