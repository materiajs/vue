import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import Checkbox from './Checkbox.vue';

Vue.component('mat-checkbox', Checkbox);

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
          <mat-checkbox v-model="value" />
        </div>
        <div>
          <mat-checkbox v-model="value" text="Label" />
        </div>
      </div>
    `,
  }));
