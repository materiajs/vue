import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import Select from './Select.vue';

Vue.component('tb-select', Select);

storiesOf('Structures/Select', module)
  .addDecorator(VueInfoAddon)
  .add('Basic usage', () => ({
    components: { Select },
    data: () => ({
      value: [],
      options: [
        { value: 'Andy' },
        { value: 'Gary' },
        { value: 'Aoife' },
        { value: 'Chrissy' },
        { value: 'Cooper' },
      ],
    }),
    template: `
      <div>
        <tb-select
          placeholder="Select multiple"
          v-model="value"
          :options="options">
          <template slot-scope="{ option }">
            {{ option.value }}
          </template>
        </tb-select>
      </div>
    `,
  }));
