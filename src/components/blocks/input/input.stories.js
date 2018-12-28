import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import Input from './Input.vue';

Vue.component('tb-input', Input);

storiesOf('Blocks/Input', module)
  .addDecorator(VueInfoAddon)
  .add('Basic usage', () => ({
    components: { Input },
    data: () => ({
      value: '',
    }),
    template: '<tb-input v-model="value" />',
  }));
