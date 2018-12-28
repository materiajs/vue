import Vue from 'vue';
import * as blocks from './blocks';
import * as composites from './composites';
import * as structures from './structures';

const components = {
  ...blocks,
  ...composites,
  ...structures,
};

Object.keys(components)
  .forEach((name) => {
    Vue.component(name, components[name]);
  });

export default components;

// export * from './blocks';
// export * from './composites';
// export * from './structures';
