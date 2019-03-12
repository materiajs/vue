import t from 'vue-types';
import { mapState, mapActions, mapGetters } from 'vuex';
import page, { componentObject } from '@/components/structures/page';
import { cloneDeep, isEmpty } from 'lodash';
import store from '@/components/structures/page/store';
import uuid from 'uuid';

export default {
  store,
  props: {
    arrayBind: t.object.def({}),
    id: t.string.def('root'),
    repeatIndex: t.number,
    editMode: t.bool.def(false),
  },
  data: () => ({
    page,
  }),
  computed: {
    ...mapState([
      'children',
      'componentList',
      'dataArrays',
      'pageData',
      'minimizedList',
    ]),
    ...mapGetters([
      'getChildrenByParentUid',
      'getParentByChildId',
      'getComponentById',
      'getValueByUid',
    ]),
    getChildren: {
      get() {
        return this.component.children;
      },
      set(children) {
        this.setChildren({ id: this.id, children });
      },
    },
    component() {
      return this.getComponentById(this.id);
    },
    getComponent() {
      if (this.component) {
        return this.page.getComponent(this.component.componentId);
      }
      return null;
    },
    getComponentOptions() {
      return this.page.getComponentOptions(this.component.componentId);
    },
    getComponentMeta() {
      return this.page.getComponentMeta(this.component.componentId);
    },
    getRootComponent() {
      if (this.component) {
        return this.page.getRootComponent(this.component.componentId);
      }
      return null;
    },
    value: {
      get() {
        return this.component && this.component.value;
      },
      set(value) {
        this.setComponentValue({ id: this.id, value });
      },
    },
    textValue() {
      if (this.isValueDynamic) {
        if (this.value.type === 'array') {
          const [key, prop] = this.value.value.split('.');
          const { index } = this.getArrayBind[key];
          if (index) {
            return this.dataArrays[key][index][prop];
          }
        }
        return this.pageData[this.value.value].toString();
      }
      return this.value.value;
    },
    dataOptions() {
      const a = Object.keys(this.pageData)
        .map(item => ({ name: item, value: item, dynamic: true }));
      a.push({ name: 'None', value: undefined });
      if (!isEmpty(this.getArrayBind)) {
        Object.keys(this.getArrayBind)
          .forEach((arrayKey) => {
            Object.keys(this.dataArrays[arrayKey][0])
              .forEach(prop => a.push({
                name: `${arrayKey}.${prop}`,
                value: `${arrayKey}.${prop}`,
                type: 'array',
                dynamic: true,
              }));
          });
      }
      return a;
    },
    isValueDynamic() {
      return this.component.value.dynamic === true;
    },
    dataOptionsDisplay() {
      if (this.isValueDynamic) {
        return `{{ ${this.component.value.name} }}`;
      }
      return '';
    },
    repeatOptions() {
      const a = Object.keys(this.dataArrays)
        .map(item => ({ name: item, value: item }));
      a.push({ name: 'None', value: undefined });
      return a;
    },
    getArrayBind() {
      const res = {
        ...this.arrayBind,
        ...(this.component.repeat
          ? {
            [this.component.repeat]:
              { key: this.component.repeat, index: this.repeatIndex },
          } : {}),
      };
      return res;
    },
    isMinimized() {
      return this.minimizedList.includes(this.component.id);
    },
  },
  methods: {
    ...mapActions([
      'addComponent',
      'removeComponent',
      'setComponentValue',
      'setEditMode',
      'moveDirection',
      'setRepeat',
      'setChildren',
      'toggleMinimized',
    ]),
    findParentId(id) {
      const parent = this.getParentByChildId(id);
      if (parent) {
        return parent.id;
      }
      return null;
    },
    toggleEditMode() {
      localStorage.setItem('componentList', JSON.stringify(this.componentList));
      return this.setEditMode();
    },
    onRemoveComponent() {
      this.removeComponent({ id: this.id });
    },
    onSaveAsTemplate() {
      const children = [];
      const getChildren = (id) => {
        const component = this.getComponentById(id);
        const newId = uuid.v4();
        children.push({ ...component });
        component.children.forEach(getChildren);
      };
      getChildren(this.id);
      const component = {
        id: uuid.v4(),
        children,
        componentId: 'my-template',
        value: {
          value: '',
        },
      };
      const stringy = JSON.stringify(component);
      localStorage.setItem('my-template', stringy);
      console.debug(JSON.parse(localStorage.getItem('my-template'))); // TODO - Remove console output
    },
    addEmptyChild(componentId) {
      const component = cloneDeep(componentObject);
      component.componentId = componentId;
      this.addComponent({ component, parentId: this.id });
    },
    onSelectComponent(component) {
      const parentId = this.id;
      console.debug('Adding component to - ', parentId); // TODO - Remove console output
      this.addComponent({ component, parentId });
    },
    onSetRepeat(repeat) {
      this.setRepeat({ id: this.id, repeat });
    },
    getRepeatById(id) {
      const component = this.getComponentById(id);
      if (component.repeat) {
        return new Array(this.dataArrays[component.repeat].length);
      }
      return 1;
    },
    getPageComponentByComponentId(componentId) {
      return this.page.getComponent(componentId);
    },
    onToggleMinimized() {
      const { id } = this.component;
      this.toggleMinimized({ id });
    },
  },
  watch: {
    dataOptions(newVal) {
      if (this.value.dynamic) {
        if (newVal.findIndex(item => item.name === this.value.name) === -1) {
          this.value = {};
        }
      }
    },
  },
};
