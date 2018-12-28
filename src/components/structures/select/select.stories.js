import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import Select from './Select.vue';

Vue.component('tb-select', Select);

const storyData = {
  singleSelect: [
    { value: 'Andy' },
    { value: 'Gary' },
    { value: 'Aoife' },
    { value: 'Chrissy' },
    { value: 'Cooper' },
  ],
  multipleBasic: [
    { value: 'Andy' },
    { value: 'Gary' },
    { value: 'Aoife' },
    { value: 'Chrissy' },
    { value: 'Cooper' },
  ],
  multipleWithChecboxes: [
    { value: 'Andy' },
    { value: 'Gary' },
    { value: 'Aoife' },
    { value: 'Chrissy' },
    { value: 'Cooper' },
  ],
};

storiesOf('Structures/Select', module)
  .addDecorator(VueInfoAddon)
  .add('Basic usage', () => ({
    components: { Select },
    data: () => ({
      multipleBasicValue: [],
      multipleWithCheckboxesValue: [],
      singleValue: {},
      ...storyData,
    }),
    template: `
      <div>
        <tb-select
          placeholder="Select single"
          v-model="singleValue"
          :single-value="true"
          :options="singleSelect">
          <template slot-scope="{ option }">
            {{ option.value }}
          </template>
        </tb-select>
        <br>
        <tb-select
          placeholder="Select multiple"
          v-model="multipleBasicValue"
          :hideSelected="true"
          :options="multipleBasic">
          <template slot-scope="{ option }">
            {{ option.value }}
          </template>
        </tb-select>
        <br>
        <tb-select
          placeholder="Select multiple with checkboxes"
          v-model="multipleWithCheckboxesValue"
          :show-checkboxes="true"
          :options="multipleWithChecboxes">
          <template slot-scope="{ option }">
            {{ option.value }}
          </template>
        </tb-select>
      </div>
    `,
  }));
