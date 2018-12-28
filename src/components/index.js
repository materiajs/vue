import * as blocks from './blocks';
import * as composites from './composites';
import * as structures from './structures';

const components = {
  ...blocks,
  ...composites,
  ...structures,
};

// export default {
//   install: (Vue) => {
//     Object.keys(components)
//       .forEach((name) => {
//         Vue.component(name, components[name]);
//       });
//   },
// };

export default components;
