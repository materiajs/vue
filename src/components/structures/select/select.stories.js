import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import Select from './Select.vue';

Vue.component('mat-select', Select);

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

storiesOf('Select', module)
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
        <mat-select
          placeholder="Select single"
          v-model="singleValue"
          :single-value="true"
          :options="singleSelect" />
        <br>
        <mat-select
          placeholder="Select multiple (Hide selected)"
          v-model="multipleBasicValue"
          :hideSelected="true"
          :options="multipleBasic">
        </mat-select>
        <br>
        <mat-select
          placeholder="Select multiple with checkboxes"
          v-model="multipleWithCheckboxesValue"
          :show-checkboxes="true"
          :options="multipleWithChecboxes">
        </mat-select>
        <mat-select
          placeholder="Select multiple with checkboxes"
          :single-value="true"
          :close-on-select="true"
          :options="singleSelect">
          <template slot="trigger">
            <mat-button>Trigger slot</mat-button>
          </template>
          <template slot="item" slot-scope="{ option }">
            Item: {{ option.value }}
          </template>
        </mat-select>
      </div>
    `,
  }));
