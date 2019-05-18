<template>
  <div @click="tabClick" class="tab">
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'TabComponent',
  props: {
    tabKey: t.number.isRequired,
  },
  mounted() {
    this.$parent.$emit('tabAdded');
  },
  methods: {
    tabClick() {
      this.$parent.setActiveTab(this.tabKey);
    },
  },
};
</script>

<style scoped lang="scss">
  .tab {
    align-items: center;
    cursor: pointer;
    display: flex;
    min-width: 60px;
    padding: 15px;
    text-align: center;
    white-space: nowrap;
    justify-content: center;
  }
</style>
