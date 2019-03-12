import t from 'vue-types';

export default {
  props: {
    padding: t.string.def(''),
    width: t.string.def(''),
    maxWidth: t.string.def(''),
    display: t.string.def(undefined),
    flexDirection: t.string.def(undefined),
  },
  computed: {
    getLayoutStyle() {
      return {
        display: this.display,
        padding: this.padding,
        width: this.width,
        'max-width': this.maxWidth,
        'flex-direction': this.flexDirection,
      };
    },
  },
};
