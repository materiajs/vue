<template>
  <div class="tb-list-builder">
    <template v-if="editMode">
      <tb-toolbar>
        <tb-spacer />
        <tb-select
          :single-value="true"
          position="bottom-right"
          :close-on-select="true"
          :options="[]"
        >
          <template slot="trigger">
            <!--<tb-fa size="large" icon="cog" />-->
            Select data
          </template>
          <template slot-scope="{ option }" slot="item">
            {{ option }}
          </template>
        </tb-select>
        <tb-fa
          :action="() => { and = 'OPPS'; }"
          icon="filter"></tb-fa>
      </tb-toolbar>
      <slot />
      <component-select @select="onSelectComponent" />
    </template>
    <template v-for="item in editMode ? [1] : [1,2,3]">
      <template v-for="(child, key) in getChildren">
        <component-builder
          :id="child"
          :key="key"/>
      </template>
    </template>
  </div>
</template>

<script>
import ComponentBuilder from './ComponentBuilder.vue';
import { mapState, mapActions } from 'vuex';
import { builder } from '@/mixins';

export default {
  mixins: [
    builder,
  ],
  provide: function d() {
    return {
      listData: {
        ...this.listData,
        and: this.getAnd,
      },
    };
  },
  data: () => ({
    and: 'yes',
  }),
  inject: ['listData'],
  name: 'ListBuilder',
  components: {
    ComponentSelect: () => import('./ComponentSelect.vue'),
    ComponentBuilder,
  },
  computed: {
    ...mapState([
      'listData',
    ]),
    getAnd() {
      return this.and;
    },
  },
  methods: {
    ...mapActions([
      'addComponent',
    ]),
  },
};
</script>

<style scoped>

</style>
