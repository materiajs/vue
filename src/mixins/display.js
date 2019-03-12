import t from 'vue-types';

export default {
  props: {
    flex: t.string.def(undefined),
    margin: t.string.def(''),
  },
  computed: {
    getDisplayStyle() {
      return {
        flex: this.flex,
        margin: this.margin,
      };
    },
  },
};
