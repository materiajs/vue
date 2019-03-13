import t from 'vue-types';

export default {
  props: {
    display: t.string.def(undefined),
    flex: t.string.def(undefined),
    flexDirection: t.string.def(undefined),
    margin: t.string.def(''),
    padding: t.string.def(''),
    width: t.string.def(''),
    maxWidth: t.string.def(''),
  },
  computed: {
    getStyle() {
      return {
        display: this.display,
        flex: this.flex,
        'flex-direction': this.flexDirection,
        margin: this.margin,
        padding: this.padding,
        width: this.width,
        'max-width': this.maxWidth,
      };
    },
  },
};
