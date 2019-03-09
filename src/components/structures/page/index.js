import { TbInput } from '@/components/blocks';
import FlexLayoutBuilder from './FlexLayoutBuilder.vue';
import FlexItemBuilder from './FlexItemBuilder.vue';
import TitleBuilder from './TitleBuilder.vue';
import ListBuilder from './ListBuilder.vue';
import ParagraphComponent from './ParagraphComponent.vue';

const componentsMap = {
  'tb-input': TbInput,
  'tb-paragraph': ParagraphComponent,
  'tb-flex-layout': FlexLayoutBuilder,
  'tb-flex-item': FlexItemBuilder,
  'tb-title': TitleBuilder,
  'tb-list': ListBuilder,
};

export const componentObject = {
  value: null,
  children: [],
  getValue: self => self.value,
  onInput: (self, value) => { self.value = value; },
  repeat: null,
  canBind: false,
};

export const components = [
  {
    ...componentObject,
    componentId: 'tb-paragraph',
    name: 'Paragraph',
    value: 'Paragraph',
    canBind: true,
  },
  {
    ...componentObject,
    componentId: 'tb-flex-layout',
    name: 'Flex layout',
    value: [],
    getValue: self => self,
    onInput: (self, value) => {
      self.children = value.children;
    },
  },
  {
    ...componentObject,
    componentId: 'tb-flex-item',
    name: 'Flex item',
    value: [],
    getValue: self => self,
    onInput: (self, value) => {
      self.children = value.children;
    },
  },
  {
    ...componentObject,
    componentId: 'tb-title',
    name: 'Title',
    value: 'Title',
    canBind: true,
  },
];

export default {
  getComponent(componentId) {
    return componentsMap[componentId];
  },
};
