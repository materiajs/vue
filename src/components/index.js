import Vue from 'vue';
import * as blocks from './blocks';
import * as composites from './composites';
import * as structures from './structures';
import * as styledComponents from './styled-components';

const components = {
  ...blocks,
  ...composites,
  ...structures,
  ...styledComponents,
};

Object.keys(components)
  .forEach((name) => {
    Vue.component(name, components[name]);
  });

export default components;
