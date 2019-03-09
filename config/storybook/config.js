/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue';
import Vue from 'vue';
import toolblox from '@/';
import Vuex from 'vuex';

function loadStories() {
  const options = {
    theme: {
      colors: {},
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
