<template>
  <div class="tb-window-item">
    <tb-transition :transition-name="transitionName">
      <div v-if="parentValue === value">
        <slot></slot>
      </div>
    </tb-transition>
  </div>
</template>

<script>
import t from 'vue-types';
import Velocity from 'velocity-animate';
import { TbTransition } from '../index';

export default {
  name: 'WindowItem',
  props: {
    value: t.number,
  },
  components: {
    TbTransition,
  },
  data: () => ({
    transitionName: 'slide-in-out-left',
  }),
  computed: {
    parentValue() {
      return this.$parent.value;
    },
  },
  watch: {
    parentValue(newVal) {
      if (newVal !== this.value) {
        this.transitionName = (newVal > this.value ? 'slide-in-out-left' : 'slide-in-out-right');
      }
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      console.debug(el); // TODO - Remove console output
      const delay = el.dataset.index * 150;
      setTimeout(() => {
        Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { complete: done },
        );
      }, delay);
    },
    leave(el, done) {
      const delay = el.dataset.index * 150;
      setTimeout(() => {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done },
        );
      }, delay);
    },
  },
};
</script>

<style scoped>

</style>
