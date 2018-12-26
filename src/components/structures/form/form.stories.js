import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import Form from './Form.vue';

Vue.component('tb-form', Form);

storiesOf('Form', module)
  .addDecorator(VueInfoAddon)
  .add('Basic usage', () => ({
    components: { Form },
    data: () => ({
      name: '',
      age: '',
      dob: '',
    }),
    methods: {
      buttonAction() {
        console.log('Clicked!');
      },
    },
    template: `
    <tb-form title="Form title">
      <tb-input v-model="name" placeholder="Name"/>
      <tb-input v-model="age" placeholder="Age"/>
      <tb-input v-model="dob" placeholder="DOB"/>
      <template slot="actions">
        <tb-button :action="buttonAction" text="Click me!" />
      </template>
    </tb-form>
    `,
  }));
