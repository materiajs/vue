<template>
  <div class="tb-page-builder">
    <tb-margin margin="-15px -15px 15px">
      <tb-toolbar color="primary-light" size="small" :shadow="false">
        <tb-spacer />
        <component-select @select="onSelectComponent" />
        <div>
          <tb-fa
            :action="toggleEditMode"
            :icon="editMode ? 'check' : 'edit'"
          />
        </div>
      </tb-toolbar>
    </tb-margin>
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
    <pre>
      <code>
        {{ componentList }}
      </code>
    </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ComponentSelect from './ComponentSelect.vue';
import ComponentBuilder from './ComponentBuilder.vue';
import { builder } from '@/mixins';
import store from './store';

export default {
  name: 'PageBuilder',
  store,
  components: {
    ComponentBuilder,
    ComponentSelect,
  },
  mixins: [
    builder,
  ],
  computed: {
    ...mapState([
      'componentList',
      'children',
    ]),
  },
};
</script>

<style scoped>

</style>
