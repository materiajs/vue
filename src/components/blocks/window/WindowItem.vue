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
    transitions: [
      'slide-in-out-left',
      'slide-in-out-right',
    ],
  }),
  computed: {
    parentValue() {
      return this.$parent.value;
    },
  },
  watch: {
    parentValue(newVal) {
      if (newVal !== this.value) {
        this.transitionName = this.transitions[(newVal > this.value ? 0 : 1)];
      }
    },
  },
};
</script>

<style scoped>

</style>
