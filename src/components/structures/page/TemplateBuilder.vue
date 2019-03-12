<template>
  <div
    v-if="template"
    class="tb-template-builder">
    <component
      :is="getComponentById(getRootComponent.componentId)"
      :id="getRootComponent.id"
      :array-bind="{}"
      :edit-mode="editMode"
    />
    {{ template.children }}
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
    getRootComponent() {
      let template;
      this.template.children.forEach((child) => {
        console.debug(child); // TODO - Remove console output
        const filtered = this.template.children
          .filter(grandChild => child.children.includes(grandChild.id));
        console.debug(filtered); // TODO - Remove console output
        if (filtered.length === 0) {
          template = child;
          console.debug('found', child.componentId); // TODO - Remove console output
        }
      });
      return template;
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
