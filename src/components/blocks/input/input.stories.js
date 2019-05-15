import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import Input from './Input.vue';

Vue.component('tb-input', Input);

storiesOf('Input', module)
  .addDecorator(VueInfoAddon)
  .add('Basic usage', () => ({
    components: { Input },
    data: () => ({
      value: '',
    }),
    template: `
      <div>
        <tb-input v-model="value" />
        <br>
        <tb-input 
          v-model="value"
          placeholder="With clear button on right" 
          :show-clear-button="true" />
      </div>
    `,
  }));
