import * as blocks from './components/blocks/index';
import * as composites from './components/composites/index';
import * as structures from './components/structures/index';
import './components/structures/page/store';

const components = {
  ...blocks,
  ...composites,
  ...structures,
};

export default {
  install: (Vue, options) => {
    Vue.prototype.$toolblox = {
      theme: {
        primary: '#1565c0',
        'primary-light': '#1e88e5',
        accent: '#78909c',
        warn: '#f44336',
        ...(options ? options.theme : {}),
      },
      darkTheme: {
        primary: '#263238',
        'primary-light': '#37474f',
        accent: '#4f5b62',
        warn: '#f44336',
        ...(options ? options.darkTheme : {}),
      },
      dark: false,
    };
    Object.keys(components)
      .forEach((name) => {
        Vue.component(name, components[name]);
      });
  },
};
