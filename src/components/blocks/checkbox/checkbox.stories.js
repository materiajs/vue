import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import Checkbox from './Checkbox.vue';

Vue.component('tb-checkbox', Checkbox);

storiesOf('Checkbox', module)
  .addDecorator(VueInfoAddon)
  .add('Basic usage', () => ({
    components: { Checkbox },
    data: () => ({
      value: false,
    }),
    template: `
      <div>
        <div>
          <tb-checkbox v-model="value" />
        </div>
        <div>
          <tb-checkbox v-model="value" text="Label" />
        </div>
      </div>
    `,
  }));
