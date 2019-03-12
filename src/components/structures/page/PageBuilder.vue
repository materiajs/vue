<template>
  <div class="tb-page-builder">
    <!--<tb-grid-layout columns="2">-->
      <!--<tb-side-bar color="primary-light">-->
        <!--<tb-side-bar-item>-->
          <!--Heya-->
        <!--</tb-side-bar-item>-->
      <!--</tb-side-bar>-->
      <!--<div>-->
        <tb-toolbar
          v-if="editMode"
          color="accent"
          :shadow="false">
          <tb-spacer />
          <component-select @select="onSelectComponent" />
          <div>
            <tb-fa
              :action="toggleEditMode"
              :icon="editMode ? 'check' : 'edit'"
            />
          </div>
        </tb-toolbar>
        <tb-flex-layout>
          <tb-flex-item>
            <children-builder
              :edit-mode="editMode"
              :id="id"></children-builder>
          </tb-flex-item>
          <!--<tb-flex-item>-->
            <!--<children-builder :id="id"></children-builder>-->
          <!--</tb-flex-item>-->
        </tb-flex-layout>
    <!--<tb-dialog></tb-dialog>-->
    <template-builder />
      <!--</div>-->
    <!--</tb-grid-layout>-->
    <!--<pre v-if="editMode">-->
      <!--<code>-->
        <!--{{ componentList }}-->
      <!--</code>-->
    <!--</pre>-->
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ComponentSelect from './ComponentSelect.vue';
import ChildrenBuilder from './ChildrenBuilder.vue';
import TemplateBuilder from './TemplateBuilder.vue';
import { builder } from '@/mixins';

export default {
  name: 'PageBuilder',
  components: {
    ChildrenBuilder,
    ComponentSelect,
    TemplateBuilder,
  },
  mixins: [
    builder,
  ],
  computed: {
    ...mapState(['componentList'])
  },
  created() {
    let componentList = JSON.parse(localStorage.getItem('componentList')) || [];
    const template = JSON.parse(localStorage.getItem('my-template'));
    if (template) {
      componentList = componentList.concat(template.children);
    }
    this.setComponentList({ componentList });
  },
  methods: {
    ...mapActions([
      'setComponentList',
    ]),
  },
};
</script>

<style scoped lang="scss">
  .tb-page-builder {
    .side-bar {}
  }
</style>
