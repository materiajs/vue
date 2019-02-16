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

export default {
  install: Vue => {
    Object.keys(components)
      .forEach((name) => {
        Vue.component(name, components[name]);
      });
  },
};
