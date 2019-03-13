import {
  TbCard,
  TbContainer,
  TbInput,
  TbFlexLayout,
} from '@/components/blocks';
import Builder from './Builder.vue';
import FlexItemBuilder from './FlexItemBuilder.vue';
import TitleBuilder from './TitleBuilder.vue';
import ImageBuilder from './ImageBuilder.vue';
import ParagraphBuilder from './ParagraphBuilder.vue';
import {
  componentIds,
  componentOptions,
  componentMeta,
} from './utils/constants';

const componentsMap = {
  [componentIds.TB_INPUT]: {
    default: TbInput,
  },
  [componentIds.TB_PARAGRAPH]: {
    default: ParagraphBuilder,
  },
  [componentIds.TB_FLEX_LAYOUT]: {
    default: Builder,
    root: TbFlexLayout,
  },
  [componentIds.TB_FLEX_ITEM]: {
    default: FlexItemBuilder,
  },
  [componentIds.TB_TITLE]: {
    default: TitleBuilder,
  },
  [componentIds.TB_IMAGE]: {
    default: ImageBuilder,
  },
  [componentIds.TB_CARD]: {
    default: Builder,
    root: TbCard,
  },
  [componentIds.TB_CONTAINER]: {
    default: Builder,
    root: TbContainer,
  },
};

export const componentObject = {
  value: {},
  children: [],
  repeat: null,
  canBind: false,
};

export const components = [
  {
    ...componentObject,
    componentId: componentIds.TB_PARAGRAPH,
    name: 'Paragraph',
    value: 'Paragraph',
    canBind: true,
  },
  {
    ...componentObject,
    componentId: 'tb-title',
    name: 'Title',
    value: {
      value: 'Title',
      padding: '0',
      size: 'regular',
      color: null,
    },
    canBind: true,
  },
  {
    ...componentObject,
    componentId: 'tb-flex-layout',
    name: 'Flex layout',
    value: {
      flexDirection: 'row',
    },
    type: 'layout',
  },
  {
    ...componentObject,
    componentId: 'tb-flex-item',
    name: 'Flex item',
    value: {},
    type: 'container',
  },
  {
    ...componentObject,
    componentId: 'tb-card',
    name: 'Card',
    value: {
      padding: '15px',
      margin: '15px',
    },
    type: 'container',
  },
  {
    ...componentObject,
    componentId: 'tb-container',
    value: {
      width: undefined,
    },
    name: 'Container',
    type: 'container',
  },
  {
    ...componentObject,
    componentId: 'tb-image',
    value: {
      src: '',
    },
    name: 'Image',
  },
];

export default {
  getComponent(componentId) {
    return componentsMap[componentId] ? componentsMap[componentId].default : Builder;
  },
  getRootComponent(componentId) {
    return componentsMap[componentId] && componentsMap[componentId].root;
  },
  getComponentOptions(componentId) {
    return componentOptions[componentId];
  },
  getComponentMeta(componentId) {
    return componentMeta[componentId];
  },
};
