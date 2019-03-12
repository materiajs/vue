<template>
  <div id="app">
    <tb-toolbar type="primary" :dark="dark" position="sticky" top="0">
      Page builder
      <tb-spacer />
      <tb-nav-link>
        <div @click="() => dark = !dark">
          Toggle dark
        </div>
      </tb-nav-link>
    </tb-toolbar>
    <tb-page-layout :dark="dark" dark-color="primary-light">
      <tb-grid-layout grid-template-columns="50% 50%">
        <tb-page-builder :edit-mode="false" :dark="dark" />
        <tb-padding padding="">
          <tb-page-builder :edit-mode="true" :dark="dark" />
        </tb-padding>
      </tb-grid-layout>
    </tb-page-layout>
  </div>
</template>

<script>
import { TbPageBuilder } from '@/components/structures';

export default {
  name: 'app',
  data: () => ({
    name: '',
    age: '',
    dob: '',
    selected: [],
    dark: false,
  }),
  components: {
    TbPageBuilder,
  },
  computed: {
    selectOptions() {
      return [
        { value: 'Andy' },
      ];
    },
  },
  methods: {
    buttonAction() {
      console.debug('Clicked!');
    },
  },
};
</script>

<style lang="scss">
</style>
