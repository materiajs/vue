<template>
  <div class="tb-page-builder">
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
          :dark="dark"
          :edit-mode="editMode"
          :id="id"></children-builder>
      </tb-flex-item>
    </tb-flex-layout>
    <!--<pre v-if="editMode">-->
      <!--<code>-->
        <!--{{ componentList }}-->
      <!--</code>-->
    <!--</pre>-->
  </div>
</template>

<script>
import axios from 'axios';
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
    // let componentList = JSON.parse(localStorage.getItem('componentList'));
    // const template = JSON.parse(localStorage.getItem('my-template'));
    // if (template) {
    //   componentList = componentList.concat(template);
    // }
    // if (!componentList || componentList === []) {
    //   componentList = [{
    //     id: 'root',
    //     children: [],
    //     value: {},
    //   }];
    // }
    axios.get('http://127.0.0.1:8000/api/pages/2', { headers: { 'Content-Type': 'application/json'}})
      .then(res => {
        console.debug(res); // TODO - Remove console output
        // res.data.data.forEach(item => {
        //    console.debug(JSON.parse(item.componentList)); // TODO - Remove console output
        // });
        const componentList = JSON.parse(res.data.componentList);
        this.setComponentList({ componentList });
      });
  },
  methods: {
    ...mapActions([
      'setComponentList',
    ]),
    toggleEditMode() {
      localStorage.setItem('componentList', JSON.stringify(this.getDescendants(this.id)));
      const componentList = JSON.stringify(this.getDescendants(this.id));
      axios.post('http://127.0.0.1:8000/api/pages/', { componentList })
        .then(res => {
          console.debug(res); // TODO - Remove console output
          // res.data.data.forEach(item => {
          //    console.debug(JSON.parse(item.componentList)); // TODO - Remove console output
          // });
          const componentList = JSON.parse(res.data.componentList);
          this.setComponentList({ componentList });
        });
      // return this.setEditMode();
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
