<template>
  <tb-select
    :value="[]"
    :single-value="true"
    :close-on-select="true"
    @input="onSelect"
    position="bottom-right"
    placeholder="Add component to layout"
    :options="options"
  >
    <div slot="item" slot-scope="{ option }">
      {{ option.name || option.componentId }}
    </div>
    <tb-fa
      slot="trigger"
      icon="plus" />
  </tb-select>
</template>

<script>
import { mapState } from 'vuex';
import { cloneDeep } from 'lodash';
import { components } from '.';

export default {
  name: 'ComponentSelect',
  data: () => ({
    components,
  }),
  computed: {
    ...mapState([
      'componentList',
    ]),
    options() {
      const parsed = JSON.parse(localStorage.getItem('my-template'));
      const templates = parsed.filter(c => c.template === true);
      return this.components.concat(templates);
    },
  },
  methods: {
    onSelect(component) {
      this.$emit('select', cloneDeep(component));
    },
  },
};
</script>

<style scoped>

</style>
