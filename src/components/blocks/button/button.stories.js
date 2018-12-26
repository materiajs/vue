import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import Button from './Button.vue';

Vue.component('tb-button', Button);

storiesOf('Button', module)
  .addDecorator(VueInfoAddon)
  .add('Basic usage', () => ({
    components: { Button },
    data: () => ({
      value: '',
    }),
    template: '<tb-button text="Button" />',
  }));
