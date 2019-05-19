<template>
  <div class="mat-expansion-item">
    <mat-transition transition-name="expand-collapse">
      <div v-if="show"><slot /></div>
    </mat-transition>
  </div>
</template>

<script>
import t from 'vue-types';
import MatTransition from '../../blocks/transition/TransitionComponent.vue';

export default {
  name: 'ExpansionItem',
  props: {
    show: t.bool.def(false),
  },
  components: {
    MatTransition,
  },
};
</script>

<style scoped>

</style>
