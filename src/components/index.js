// import * as blocks from './blocks';
// import * as composites from './composites';
// import * as structures from './structures';
//
// const components = {
//   ...blocks,
//   ...composites,
//   ...structures,
// };
//
// // export default {
// //   install: (Vue) => {
// //     Object.keys(components)
// //       .forEach((name) => {
// //         Vue.component(name, components[name]);
// //       });
// //   },
// // };
//
// export default components;

export { default as TbButton } from './blocks/button/Button.vue';
export { default as TbInput } from './blocks/input/Input.vue';
export { default as TbList } from './blocks/list/List.vue';
export { default as TbChip } from './blocks/chip/Chip.vue';
export { default as TbTransitionComponent } from './blocks/transition/TransitionComponent.vue';
export { default as TbCheckbox } from './blocks/checkbox/Checkbox.vue';
