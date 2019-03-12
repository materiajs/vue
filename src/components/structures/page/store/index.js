import Vue from 'vue';
import Vuex from 'vuex';
import uuid from 'uuid';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataArrays: {
      articles: [
        {
          title: 'What is Lorem Ipsum?',
          body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
          title: 'Where does it come from?',
          body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n'
          + '\n'
          + 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        },
        {
          title: 'Where can I get some?',
          body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        },
      ],
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
    minimizedList: [],
  },
  mutations: {
    SET_COMPONENT_LIST(state, { componentList }) {
      state.componentList = componentList;
    },
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
    REMOVE_COMPONENT(state, { id }) {
      const p = state.componentList.find(c => c.children.includes(id));
      const idx = p.children.findIndex(c => c === id);
      p.children.splice(idx, 1);
      state.componentList
        .splice(state.componentList.findIndex(c => c.id === p.id), 1, p);
      const componentsToDelete = [id];
      const findChildren = (arg1) => {
        const component = state.componentList.find(c => c.id === arg1);
        component.children.forEach((child) => {
          componentsToDelete.push(child);
          findChildren(child);
        });
      };
      const removeById = (_id) => {
        const index = state.componentList.findIndex(c => c.id === _id);
        state.componentList.splice(index, 1);
      };
      findChildren(id);
      componentsToDelete.forEach(removeById);
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
    SET_REPEAT(state, { id, repeat }) {
      const component = state.componentList.find(c => c.id === id);
      component.repeat = repeat;
      state.componentList.splice(state.componentList.findIndex(c => c.id === id), 1, component);
    },
    SET_CHILDREN(state, { id, children }) {
      const component = state.componentList.find(c => c.id === id);
      component.children = children;
      state.componentList.splice(state.componentList.findIndex(c => c.id === id), 1, component);
    },
    TOGGLE_MINIMIZED(state, { id }) {
      const idx = state.minimizedList.findIndex(item => item === id);
      if (idx > -1) {
        state.minimizedList.splice(idx, 1);
      } else {
        state.minimizedList.push(id);
      }
      console.debug(state.minimizedList); // TODO - Remove console output
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
    setComponentList({ commit }, { componentList }) {
      commit('SET_COMPONENT_LIST', { componentList });
    },
    addComponent({ commit }, { component, parentId }) {
      component.id = uuid.v4();
      commit('ADD_COMPONENT', { component, parentId });
    },
    removeComponent({ commit }, { id }) {
      commit('REMOVE_COMPONENT', { id });
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
    setRepeat({ commit }, { id, repeat }) {
      commit('SET_REPEAT', { id, repeat });
    },
    setChildren({ commit }, { id, children }) {
      console.debug('Setting children', children, id); // TODO - Remove console output
      commit('SET_CHILDREN', { id, children });
    },
    toggleMinimized({ commit }, { id }) {
      commit('TOGGLE_MINIMIZED', { id });
    },
  },
});
