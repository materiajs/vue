/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info/lib/index';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Toolbar from './Toolbar.vue';

storiesOf('Toolbar', module)
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
        <mat-toolbar>
          Primary
          <mat-spacer />
  
        </mat-toolbar>
        <br>
        <mat-toolbar color="accent" :shadow="false" size="small">
          Accent
          <mat-spacer />
          <mat-nav-link @click="onClickLink">No shadow</mat-nav-link>
          <mat-nav-link>Small</mat-nav-link>
        </mat-toolbar>
        </br>
        <mat-toolbar color="primary-light"  size="large">
          Primary light
          <mat-spacer />
          <mat-nav-link>Large</mat-nav-link>
        </mat-toolbar>
        <br>
         <mat-toolbar :color="null" :shadow="false">
          Null color 
          <mat-spacer />
          <mat-nav-link target="_blank" href="http://storybook.andyfeely.com">No shadow</mat-nav-link>
        </mat-toolbar>
        <br>
        <mat-toolbar :dark="dark">
          Dark theme primary
        <mat-spacer></mat-spacer>
        <mat-nav-link @click="onClickLink">NavLink 1</mat-nav-link>
        <mat-nav-link>NavLink 2</mat-nav-link>
        </mat-toolbar>
         <br>
         <mat-toolbar :dark="dark" color="primary-light">
          Dark theme primary light
        </mat-toolbar>
         <br>
        <mat-toolbar color="accent" :dark="true" :shadow="false" size="small">
          Dark theme accent
          <mat-spacer />
          <mat-nav-link @click="onClickLink">Small</mat-nav-link>
        </mat-toolbar>
      </div>
    `,
  }));
