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
    dark: t.bool.def(false),
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
      return this.getComponentById(this.id) || {};
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
    styleOptions: {
      get() {
        return this.component && this.component.style;
      },
      set(value) {
        this.setComponentStyle({ id: this.id, value });
      },
    },
    textValue() {
      if (this.isValueDynamic) {
        if (this.value.type === 'array') {
          const [key, prop] = this.value.value.split('.');
          const { index } = this.getArrayBind[key];
          if (index !== undefined) {
            return this.dataArrays[key][index][prop];
          }
        }
        console.debug(this.pageData, this.value); // TODO - Remove console output
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
      'setComponentStyle',
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
    onRemoveComponent() {
      this.removeComponent({ id: this.id });
    },
    getDescendants(id) {
      const children = [];
      const getChildren = (_id) => {
        const component = this.getComponentById(_id);
        children.push({ ...component });
        component.children.forEach(getChildren);
      };
      getChildren(id);
      return children;
    },
    onSaveAsTemplate() {
      const children = [...this.getDescendants(this.id)];
      console.debug(children.length); // TODO - Remove console output
      let newRootId;
      children.forEach((child) => {
        const parent = children.find(c => c.children.includes(child.id));
        const newId = uuid.v4();
        if (parent) {
          const idx = parent.children.findIndex(c => c === child.id);
          parent.children[idx] = newId;
        }
        child.id = newId;
        if (!parent) {
          newRootId = child.id;
          console.debug('New root', newRootId); // TODO - Remove console output
        }
      });
      const component = {
        id: uuid.v4(),
        children: [newRootId],
        componentId: 'my-template',
        value: {
          value: '',
        },
        template: true,
      };
      children.unshift(component);
      const stringy = JSON.stringify(children);
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
    getPageComponentById(id) {
      const storeComponent = this.getComponentById(id);
      return this.getPageComponentByComponentId(storeComponent.componentId);
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
