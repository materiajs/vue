export const componentIds = {
  TB_INPUT: 'tb-input',
  TB_PARAGRAPH: 'tb-paragraph',
  TB_FLEX_LAYOUT: 'tb-flex-layout',
  TB_FLEX_ITEM: 'tb-flex-item',
  TB_TITLE: 'tb-title',
  TB_CARD: 'tb-card',
  TB_CONTAINER: 'tb-container',
  TB_IMAGE: 'tb-image',
};

const colorOptions = {
  name: 'color',
  displayName: 'Color',
  type: 'select',
  selectOptions: [
    { name: 'None', value: null },
    { name: 'Primary', value: 'primary' },
    { name: 'Primary light', value: 'primary-light' },
    { name: 'Accent', value: 'accent' },
    { name: 'Warn', value: 'warn' },
  ],
};

export const componentMeta = {
  [componentIds.TB_CONTAINER]: {
    color: 'primary',
    dark: false,
  },
  [componentIds.TB_CARD]: {
    color: 'primary-light',
    dark: false,
  },
  [componentIds.TB_FLEX_LAYOUT]: {
    color: 'accent',
    dark: true,
  },
  [componentIds.TB_FLEX_ITEM]: {
    color: 'primary-light',
    dark: true,
  },
};

const displayOptions = {
  name: 'display',
  displayName: 'Display',
  type: 'select',
  selectOptions: [
    { name: 'None', value: undefined },
    { name: 'flex', value: 'flex' },
    { name: 'grid', value: 'grid' },
  ],
};

const flexDirection = {
  name: 'flexDirection',
  displayName: 'Flex direction',
  type: 'select',
  selectOptions: [
    { name: 'Row', value: 'row' },
    { name: 'Column', value: 'column' },
  ],
};

const margin = {
  name: 'margin',
  displayName: 'Margin',
  type: 'select',
  selectOptions: [
    { name: 'None', value: '0' },
    { name: 'Auto', value: 'auto' },
    { name: '15px', value: '15px' },
    { name: '30px', value: '30px' },
    { name: '0 15px', value: '0 15px' },
    { name: '0 30px', value: '0 30px' },
    { name: '15px 0', value: '15px 0' },
    { name: '30px 0', value: '30px 0' },
  ],
};

const flexOptions = {
  name: 'flex',
  displayName: 'Flex',
  type: 'select',
  selectOptions: [
    { name: '1', value: '1' },
    { name: '2', value: '2' },
  ],
};

const gridTemplateColumns = {
  name: 'grid-template-columns',
  displayName: 'Grid template columns',
  type: 'select',
  selectOptions: [
    { name: '50%', value: '50%' },
  ],
};

const gridGap = {
  name: 'grid-gap',
  displayName: 'Grid gap',
  type: 'select',
  selectOptions: [
    { name: '15px', value: '15px' },
  ],
};

export const componentOptions = {
  [componentIds.TB_CONTAINER]: [
    colorOptions,
    displayOptions,
    flexDirection,
    margin,
    gridTemplateColumns,
    gridGap,
    {
      name: 'max-width',
      displayName: 'Max width',
      type: 'select',
      selectOptions: [
        { name: 'None', value: undefined },
        { name: '500px', value: '500px' },
        { name: '1000px', value: '1000px' },
      ],
    },
  ],
  [componentIds.TB_FLEX_LAYOUT]: [
    {
      name: 'flexDirection',
      displayName: 'Flex direction',
      type: 'select',
      selectOptions: [
        { name: 'Row', value: 'row' },
        { name: 'Column', value: 'column' },
      ],
    },
  ],
  [componentIds.TB_FLEX_ITEM]: [
    {
      name: 'flex',
      displayName: 'Flex',
      type: 'select',
      selectOptions: [
        { name: '1', value: '1' },
        { name: '2', value: '2' },
        { name: '3', value: '3' },
      ],
    },
  ],
  [componentIds.TB_CARD]: [
    margin,
    displayOptions,
    flexOptions,
    flexDirection,
    gridTemplateColumns,
    gridGap,
    {
      name: 'padding',
      displayName: 'Padding',
      type: 'select',
      selectOptions: [
        { name: 'None', value: '0' },
        { name: '15px', value: '15px' },
        { name: '30px', value: '30px' },
      ],
    },
  ],
  [componentIds.TB_TITLE]: [
    {
      name: 'padding',
      displayName: 'Padding',
      type: 'select',
      selectOptions: [
        { name: 'None', value: '0' },
        { name: 'Bottom - 15', value: '0 0 15px' },
        { name: 'Bottom - 15', value: '0 0 15px' },
        { name: '15px', value: '15px' },
        { name: '15px top/bottom', value: '15px 0' },
      ],
    },
    {
      name: 'margin',
      displayName: 'Margin',
      type: 'select',
      selectOptions: [
        { name: 'None', value: '0' },
        { name: 'Test', value: '-15px -15px 15px' },
        { name: 'Bottom - 15', value: '0 0 15px' },
        { name: '15px', value: '15px' },
        { name: '15px top/bottom', value: '15px 0' },
      ],
    },
    {
      name: 'size',
      displayName: 'Size',
      type: 'select',
      selectOptions: [
        { name: 'Extra small', value: 'xs' },
        { name: 'Small', value: 'small' },
        { name: 'Regular', value: 'regular' },
        { name: 'Large', value: 'large' },
        { name: 'Extra large', value: 'xl' },
      ],
    },
    colorOptions,
  ],
  [componentIds.TB_PARAGRAPH]: [
    {
      name: 'padding',
      displayName: 'Padding',
      type: 'select',
      selectOptions: [
        { name: 'None', value: '0' },
        { name: '15px', value: '15px' },
        { name: 'Bottom - 15', value: '0 0 15px' },
        { name: '15px top/bottom', value: '15px 0' },
      ],
    },
  ],
};
