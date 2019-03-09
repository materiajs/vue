<template>
  <tb-select
    :value="[]"
    :single-value="true"
    :close-on-select="true"
    @input="onSelect"
    position="bottom-right"
    placeholder="Add component to layout"
    :options="components"
  >
    <div slot="item" slot-scope="{ option }">
      {{ option.name }}
    </div>
    <tb-fa
      slot="trigger"
      icon="plus" />
  </tb-select>
</template>

<script>
import { cloneDeep } from 'lodash';
import { components } from '.';

export default {
  name: 'ComponentSelect',
  data: () => ({
    components,
  }),
  methods: {
    onSelect(component) {
      this.$emit('select', cloneDeep(component));
    },
  },
};
</script>

<style scoped>

</style>
