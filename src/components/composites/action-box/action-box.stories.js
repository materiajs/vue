import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import ActionBox from './ActionBox.vue';

Vue.component('tb-action-box', ActionBox);

storiesOf('Action Box', module)
  .addDecorator(VueInfoAddon)
  .add('Basic usage', () => ({
    components: {
      ActionBox,
    },
    data: () => ({
      open1: false,
      open2: false,
      open3: false,
      wrapperStyle: {
        'border-radius': '15px',
        position: 'relative',
        padding: '15px',
        border: '1px solid #eee',
        cursor: 'pointer',
        'margin-bottom': '15px',
      },
    }),
    template: `
      <div>
        <div style="position: relative">
          <tb-action-box :value="true">
            <div style="padding: 15px">
              Always open
            </div>
          </tb-action-box>
        </div>
        <div style="min-height: 75px"></div>
        <div
          :style="wrapperStyle"
          @click="() => open1 = true">
          Click me - {{ open1.toString() }}
          <tb-action-box position="bottom-left" v-model="open1">
            <div @click.stop="() => open1 = false" style="padding: 15px">
              Position bottom left - click here to close
            </div>
          </tb-action-box>
        </div>
        <div
          :style="wrapperStyle"
          @click="() => open2 = true">
          Click me - {{ open2.toString() }} 
          <tb-action-box position="bottom-right" v-model="open2">
            <div @click.stop="() => open2 = false" style="padding: 15px">
              Position bottom right - click here to close
            </div>
          </tb-action-box>
        </div>
        <div
          :style="wrapperStyle"
          @mouseover="() => open3 = true"
          @mouseleave="() => open3 = false"
          >
          Hover me
          <tb-action-box v-model="open3">
            <div style="padding: 15px">
              Position bottom right - click here to close
            </div>
          </tb-action-box>
        </div>
      </div>
    `,
  }));
