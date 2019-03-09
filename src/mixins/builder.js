import t from 'vue-types';
import { mapState, mapActions, mapGetters } from 'vuex';
import page, { componentObject } from '@/components/structures/page';
import { cloneDeep, isEmpty } from 'lodash';

export default {
  props: {
    arrayBind: t.object.def({}),
    id: t.string.def('root'),
    repeatIndex: t.number,
  },
  data: () => ({
    page,
  }),
  computed: {
    ...mapState([
      'children',
      'editMode',
      'componentList',
      'dataArrays',
      'pageData',
    ]),
    ...mapGetters([
      'getChildrenByParentUid',
      'getParentByChildId',
      'getComponentById',
      'getValueByUid',
    ]),
    getChildren() {
      return this.component.children;
      // .map(componentId => this.componentList.find(component => component.id === componentId));
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
    value: {
      get() {
        return this.component && this.component.value;
      },
      set(value) {
        this.setComponentValue({ id: this.id, value });
      },
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
    getRepeat() {
      if (this.component.repeat) {
        return new Array(this.dataArrays[this.component.repeat].length);
      }
      return 1;
    },
    getArrayBind() {
      const res = {
        ...this.arrayBind,
        ...(this.component.repeat
          ? {
            [this.component.repeat]:
              { key: this.component.repeat },
          } : {}),
      };
      return res;
    },
  },
  methods: {
    ...mapActions([
      'addComponent',
      'setComponentValue',
      'setEditMode',
      'moveDirection',
      'setDataOptions',
      'setRepeat',
    ]),
    findParentId(id) {
      const parent = this.getParentByChildId(id);
      if (parent) {
        return parent.id;
      }
      return null;
    },
    toggleEditMode() {
      return this.setEditMode();
    },
    removeComponent() {
      this.$emit('removeComponent', this.value);
    },
    addEmptyChild(componentId) {
      const component = cloneDeep(componentObject);
      component.componentId = componentId;
      this.addComponent({ component, parentId: this.id });
    },
    checkChildrenValue(componentId) {
      if (!this.getChildren || this.getChildren.length === 0) {
        this.addEmptyChild(componentId);
      }
    },
    onSelectComponent(component) {
      const parentId = this.id;
      console.debug('Adding component to - ', parentId); // TODO - Remove console output
      this.addComponent({ component, parentId });
    },
    moveOrderUp() {
      const { id } = this.component;
      this.moveDirection({ id });
    },
    moveOrderDown() {
      const { id } = this.component;
      this.moveDirection({ id, direction: -1 });
    },
    onSetDataOptions(dataOptions) {
      this.setDataOptions({ id: this.id, dataOptions });
    },
    onSetRepeat(repeat) {
      this.setRepeat({ id: this.id, repeat });
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
