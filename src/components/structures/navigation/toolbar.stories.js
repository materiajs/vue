import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import Toolbar from './Toolbar.vue';
import NavLink from '../../blocks/navigation/NavLink.vue';
import Spacer from '../../styled-components/Spacer';

Vue.component('tb-nav-link', NavLink);
Vue.component('tb-toolbar', Toolbar);
Vue.component('tb-spacer', Spacer);

storiesOf('Structures/Toolbar', module)
  .addDecorator(VueInfoAddon)
  .add('Basic usage', () => ({
    components: { Toolbar },
    data: () => ({
      value: '',
    }),
    template: `
      <div>
        <tb-toolbar>
          How are ya
          <tb-spacer />
          <tb-nav-link>Yeah</tb-nav-link>
          <tb-nav-link>Nope</tb-nav-link>
        </tb-toolbar>
        <br>
        <tb-toolbar :dark="true">
          How are ya
          <tb-spacer />
          <tb-nav-link>Yeah</tb-nav-link>
          <tb-nav-link>Nope</tb-nav-link>
        </tb-toolbar>
      </div>
    `,
  }));
