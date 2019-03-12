/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue';
import Vue from 'vue';
import toolblox from '@/';
import Vuex from 'vuex';

// $primary-color-dark:   #512DA8
// $primary-color:        #673AB7
// $primary-color-light:  #D1C4E9
// $primary-color-text:   #FFFFFF
// $accent-color:         #009688
// $primary-text-color:   #212121
// $secondary-text-color: #757575
// $divider-color:        #BDBDBD


function loadStories() {

  const options = {
    theme: {
      primary: '#0288D1',
      accent: '#448AFF',
      'primary-light': '#81d4fa',
    },
  };
  Vue.use(Vuex);
  Vue.use(toolblox, options);
  const req = require.context('@/components/', true, /\.stories\.js$/);
  req.keys()
    .forEach((filename) => {
      req(filename);
    });
}

configure(loadStories, module);
