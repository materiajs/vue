<template>
  <div
    v-if="template"
    class="tb-template-builder">
    <tb-toolbar v-if="editMode">
      Template
    </tb-toolbar>
    <component
      v-else
      :is="getComponentById(getRootComponent.componentId)"
      :id="getRootComponent.id"
      :array-bind="{}"
      :edit-mode="editMode"
    />
  </div>
</template>

<script>
import t from 'vue-types';
import page from '@/components/structures/page';

export default {
  name: 'TemplateBuilder',
  props: {
    editMode: t.bool.def(false),
  },
  data: () => ({
    page,
  }),
  computed: {
    template() {
      return JSON.parse(localStorage.getItem('my-template'));
    },
    templateComponent() {
      return this.template && this.template.find(c => c.template === true);
    },
    getRootComponent() {
      return this.template
        .find(c => c.id === this.templateComponent.children[0]);
    },
  },
  methods: {
    getComponentById(componentId) {
      return this.page.getComponent(componentId);
    },
  },
};
</script>

<style scoped>

</style>
