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
import { builder } from '@/mixins';

export default {
  name: 'PageBuilder',
  components: {
    ChildrenBuilder,
    ComponentSelect,
  },
  mixins: [
    builder,
  ],
  computed: {
    ...mapState(['componentList']),
  },
  created() {
    let componentList = JSON.parse(localStorage.getItem('componentList'));
    const template = JSON.parse(localStorage.getItem('my-template'));
    if (template) {
      componentList = componentList.concat(template);
    }
    if (!componentList || componentList === []) {
      componentList = [{
        id: 'root',
        children: [],
        value: {},
      }];
    }
    this.setComponentList({ componentList });
  },
  methods: {
    ...mapActions([
      'setComponentList',
    ]),
    toggleEditMode() {
      localStorage.setItem('componentList', JSON.stringify(this.getDescendants(this.id)));
      return this.setEditMode();
    },
  },
};
</script>

<style scoped lang="scss">
  .tb-page-builder {
    position: sticky;
    top: 60px;
    height: calc(100vh - 60px);
    overflow: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* IE 10+ */
    &::-webkit-scrollbar { /* WebKit */
      width: 0;
      height: 0;
    }
  }
</style>
