import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import ActionBox from './ActionBox.vue';
import Button from '../button/Button.vue';

Vue.component('tb-action-box', ActionBox);
Vue.component('tb-button', Button);

storiesOf('Action Box', module)
  .addDecorator(VueInfoAddon)
  .add('Basic usage', () => ({
    components: {
      ActionBox,
    },
    data: () => ({
      open: false,
    }),
    template: `
      <div>
        <tb-button
          :action="() => open = !open"
          text="Toggle"/>
        <tb-action-box :open="open" />
      </div>
    `,
  }));
