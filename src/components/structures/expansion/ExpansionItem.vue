<template>
  <div class="tb-expansion-item">
    <tb-transition transition-name="expand-collapse">
      <div v-if="show"><slot /></div>
    </tb-transition>
  </div>
</template>

<script>
import t from 'vue-types';
import TbTransition from '../../blocks/transition/TransitionComponent.vue';

export default {
  name: 'ExpansionItem',
  props: {
    show: t.bool.def(false),
  },
  components: {
    TbTransition,
  },
};
</script>

<style scoped>

</style>
