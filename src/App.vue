<template>
  <div id="app">
    <tb-form title="Title">
      <tb-input v-model="name" placeholder="Name"/>
      <tb-input v-model="age" placeholder="Age" type="number"/>
      <tb-input v-model="dob" placeholder="DOB"/>
      <template slot="actions">
        <tb-button :action="buttonAction" text="Cancel" />
        <tb-button :action="buttonAction" type="primary" text="Submit" />
      </template>
      <tb-select
        placeholder="Select multiple"
        v-model="selected"
        :options="selectOptions">
        <template slot-scope="{ option }">
          {{ option.value }}
        </template>
      </tb-select>
    </tb-form>
  </div>
</template>

<script>
import { TbInput, TbButton } from '@/components/blocks';
import { TbForm } from '@/components/composites';
import { TbSelect } from '@/components/structures';

export default {
  name: 'app',
  data: () => ({
    name: '',
    age: '',
    dob: '',
    selected: [],
  }),
  components: {
    TbForm,
    TbInput,
    TbButton,
    TbSelect,
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
  body, html {
    background: $primary-color;
  }
  #app {
    padding: 15px;
  }
</style>
