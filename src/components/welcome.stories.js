import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';
import Vue from 'vue';
import VueInfoAddon from 'storybook-addon-vue-info/lib/index';
import ActionBox from './composites/action-box/ActionBox.vue';

Vue.component('tb-action-box', ActionBox);

storiesOf('Toolblox', module)
  .addDecorator(VueInfoAddon)
  .add('Welcome', () => ({
    components: {
      ActionBox,
    },
    methods: {
      onSelectToolbar() {
        linkTo('Structures/Toolbar')();
      },
    },
    template: `
      <div>
        <p>
         Here are some examples of the components available.
        </p>
        <p>
         Be sure to check out the component's storybook to see more detailed examples.
        </p>
        <tb-toolbar size="small" color="accent" :shadow="false">
          Input
          <tb-spacer />
          <tb-nav-link @click="onSelectToolbar()">
            Storybook
          </tb-nav-link>
        </tb-toolbar>
      </div>
    `,
  }));
