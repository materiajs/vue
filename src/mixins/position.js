import t from 'vue-types';

export default {
  props: {
    top: t.oneOfType([t.string, t.number]).def(undefined),
    position: t.string.def(undefined),
  },
  computed: {
    getPositionStyle() {
      return {
        position: this.position,
        top: this.top,
      };
    },
  },
};
