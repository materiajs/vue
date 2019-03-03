/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Toolbar from './Toolbar.vue';

storiesOf('Structures/Toolbar', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('Basic usage', () => ({
    components: { Toolbar },
    props: {
      dark: {
        type: Boolean,
        default: boolean('dark', true),
      },
    },
    methods: {
      onClickLink() {
        action('onClickLink')('Nav link clicked');
      },
    },
    template: `
      <div>
        <tb-toolbar>
          Primary
          <tb-spacer />
  
        </tb-toolbar>
        <br>
        <tb-toolbar color="accent" :shadow="false" size="small">
          Accent
          <tb-spacer />
          <tb-nav-link>No shadow</tb-nav-link>
          <tb-nav-link>Small</tb-nav-link>
        </tb-toolbar>
        </br>
        <tb-toolbar color="primary-light"  size="large">
          Primary light
          <tb-spacer />
          <tb-nav-link>Large</tb-nav-link>
        </tb-toolbar>
        <br>
         <tb-toolbar :color="null" :shadow="false">
          Null color 
          <tb-spacer />
          <tb-nav-link>No shadow</tb-nav-link>
        </tb-toolbar>
        <br>
        <tb-toolbar :dark="dark">
          Dark theme primary
        <tb-spacer></tb-spacer>
        <tb-nav-link @click="onClickLink">NavLink 1</tb-nav-link>
        <tb-nav-link>NavLink 2</tb-nav-link>
        </tb-toolbar>
         <br>
         <tb-toolbar :dark="dark" color="primary-light">
          Dark theme primary light
        </tb-toolbar>
         <br>
        <tb-toolbar color="accent" :dark="true" :shadow="false" size="small">
          Dark theme accent
          <tb-spacer />
          <tb-nav-link @click="onClickLink">Small</tb-nav-link>
        </tb-toolbar>
      </div>
    `,
  }));
