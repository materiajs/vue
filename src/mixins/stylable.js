import t from 'vue-types';

export default {
  props: {
    display: t.string,
    flex: t.string,
    flexDirection: t.string,
    gridTemplateColumns: t.string,
    margin: t.string,
    padding: t.string,
    width: t.string,
    maxWidth: t.string,
    styleOptions: t.object,
  },
  computed: {
    // getStyle() {
    //   // return {
    //   //   display: this.display,
    //   //   flex: this.flex,
    //   //   'flex-direction': this.flexDirection,
    //   //   'grid-template-columns': this.gridTemplateColumns,
    //   //   margin: this.margin,
    //   //   padding: this.padding,
    //   //   width: this.width,
    //   //   'max-width': this.maxWidth,
    //   // };
    //   return this
    // },
  },
};
