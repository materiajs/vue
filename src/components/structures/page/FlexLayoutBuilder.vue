<template>
  <div class="tb-flex-layout-builder">
    <tb-padding padding="0 0 15px">
      <tb-toolbar color="accent" :shadow="false">
        Flex layout
        <tb-spacer />
        <tb-fa icon="plus-circle" size="large" :action="addEmptyChild" />
      </tb-toolbar>
    </tb-padding>
    <tb-flex-layout>
      <tb-flex-item
        v-for="(child, key) in value"
        :key="key"
      >
        <component
          v-if="child"
          :is="child.component"
          v-bind="child.props"
          v-model="child.children"
        />
        <div v-else>
          <component-select @select="component => updateChildren(component, key)" />
        </div>
      </tb-flex-item>
      <tb-flex-item v-if="!value.length">
        <component-select @select="component => updateChildren(component, 0)" />
      </tb-flex-item>
    </tb-flex-layout>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'FlexLayoutBuilder',
  props: {
    update: t.func,
    value: t.array,
  },
  components: {
    ComponentSelect: () => import('./ComponentSelect.vue'),
  },
  methods: {
    addEmptyChild() {
      const value = [...this.value];
      value.push(null);
      this.$emit('input', value);
    },
    updateChildren(component, index) {
      const value = [...this.value];
      value.splice(index, 1, component);
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped>

</style>
