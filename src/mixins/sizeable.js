import t from 'vue-types';

export default {
  props: {
    size: t.oneOf(['xs', 'small', 'regular', 'large', 'xl']),
  },
};
