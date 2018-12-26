<template>
  <div id="app">
    <tb-form title="Title">
      <tb-input v-model="name" placeholder="Name"/>
      <tb-input v-model="age" placeholder="Age" type="number"/>
      <tb-input v-model="dob" placeholder="DOB"/>
      <template slot="actions">
        <tb-button :action="buttonAction" text="Click me!" />
      </template>
    </tb-form>
  </div>
</template>

<script>
import TbForm from './components/structures/form/Form.vue';
import TbInput from './components/blocks/input/Input.vue';
import TbButton from './components/blocks/button/Button.vue';

export default {
  name: 'app',
  data: () => ({
    name: '',
    age: '',
    dob: '',
  }),
  components: {
    TbForm,
    TbInput,
    TbButton,
  },
  methods: {
    buttonAction() {
      alert('Clicked!');
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
