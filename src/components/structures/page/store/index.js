import Vue from 'vue';
import Vuex from 'vuex';
import uuid from 'uuid';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataArrays: {
      people: [
        { name: 'Andy', surname: 'Feely' },
        { name: 'John', surname: 'Graham' },
        { name: 'Flister', surname: 'Flooster' },
      ],
      animals: [
        { name: 'Ostrich', specialPower: 'Fast running' },
        { name: 'Snake', specialPower: 'Jiu jitsu' },
        { name: 'Lion', specialPower: 'Hunting' },
      ],
      aoife: [
        { name: 'Ostrich', specialPower: 'Fast running' },
        { name: 'Snake', specialPower: 'Jiu jitsu' },
        { name: 'Lion', specialPower: 'Hunting' },
        { name: 'Test', specialPower: 'test' },
        { name: 'Lion', specialPower: 'Hunting' },
      ],
    },
    pageData: {
      pageName: 'My article',
      views: 203,
    },
    editMode: false,
    children: [],
    componentList: [{
      id: 'root',
      children: [],
      value: {},
    }],
  },
  mutations: {
    ADD_COMPONENT(state, { component, parentId }) {
      state.componentList.push(component);
      const parent = state.componentList.find(c => c.id === parentId);
      if (parent) {
        if (!parent.children) {
          parent.children = [component.id];
        } else {
          parent.children.push(component.id);
        }
        state.componentList
          .splice(state.componentList.findIndex(c => c.id === parent.id), 1, parent);
      } else {
        state.children.push(component.id);
      }
    },
    SET_COMPONENT_VALUE(state, { id, value }) {
      const component = state.componentList.find(c => c.id === id);
      component.value = value;
      state.componentList.splice(state.componentList.findIndex(c => c.id === id), 1, component);
    },
    SET_EDIT_MODE(state, editMode = !state.editMode) {
      state.editMode = editMode;
    },
    MOVE_ORDER(state, { id, direction = 1 }) {
      // p = parent (line length eslint)
      const p = state.componentList.find(c => c.children.includes(id));
      if (!p.children) {
        p.children = [id];
      } else {
        const idx = p.children.findIndex(o => o === id);
        if (idx === -1) {
          p.children.splice(p.children.length - 1, 0, id);
        } else if (idx >= 0) {
          if (direction === 1 && idx > 0) {
            [p.children[idx - 1], p.children[idx]] = [p.children[idx], p.children[idx - 1]];
          } else if (direction === -1 && idx < (p.children.length - 1)) {
            [p.children[idx], p.children[idx + 1]] = [p.children[idx + 1], p.children[idx]];
          }
        }
      }
      state.componentList
        .splice(state.componentList.findIndex(c => c.id === p.id), 1, p);
    },
    SET_DATA_OPTIONS(state, { id, dataOptions }) {
      const component = state.componentList.find(c => c.id === id);
      component.dataOptions = dataOptions;
      console.debug(component.dataOptions); // TODO - Remove console output
      state.componentList.splice(state.componentList.findIndex(c => c.id === id), 1, component);
    },
    SET_REPEAT(state, { id, repeat }) {
      const component = state.componentList.find(c => c.id === id);
      component.repeat = repeat;
      state.componentList.splice(state.componentList.findIndex(c => c.id === id), 1, component);
    },
  },
  getters: {
    getChildrenByParentUid: state => id => state.componentList.filter(c => c.parent === id),
    getParentByChildId: state => id => state.componentList.find(c => c.children.includes(id)),
    getComponentById: state => id => state.componentList.find(c => c.id === id),
    getValueByUid: state => (id) => {
      const a = state.componentList.filter(c => c.id === id);
      return a.value;
    },
  },
  actions: {
    addComponent({ commit }, { component, parentId }) {
      component.id = uuid.v4();
      commit('ADD_COMPONENT', { component, parentId });
    },
    setComponentValue({ commit }, params) {
      commit('SET_COMPONENT_VALUE', params);
    },
    setEditMode({ commit }, editMode) {
      commit('SET_EDIT_MODE', editMode);
    },
    moveDirection({ commit }, { id, direction }) {
      commit('MOVE_ORDER', { id, direction });
    },
    setDataOptions({ commit }, { id, dataOptions }) {
      commit('SET_DATA_OPTIONS', { id, dataOptions });
    },
    setRepeat({ commit }, { id, repeat }) {
      commit('SET_REPEAT', { id, repeat });
    },
  },
});
