<template>
  <div class="mat-tabs-wrapper">
    <div class="mat-tabs">
      <slot />
    </div>
    <div
      class="mat-tabs-ink-line"
      :style="inkLinePosition"
    ></div>
  </div>
</template>

<script>
import t from 'vue-types';
import themeable, { defaultPrimaryColor } from '../../../mixins/themeable';

export default {
  name: 'TabsComponent',
  mixins: [
    themeable,
  ],
  props: {
    color: defaultPrimaryColor,
    value: t.number.def(0),
    tabs: t.array,
  },
  data: () => ({
    tabAmount: 0,
  }),
  created() {
    this.$on('tabAdded', this.onTabAdded);
  },
  computed: {
    inkLinePosition() {
      if (this.tabAmount) {
        const left = this.$children.slice(0, this.value)
          .map(child => child.$el.clientWidth)
          .reduce((acc, current) => acc + current, 0);
        const width = this.$children[this.value] && this.$children[this.value].$el.clientWidth;
        return {
          left: `${left}px`,
          width: `${width}px`,
          background: this.background,
        };
      }
      return null;
    },
  },
  methods: {
    onTabAdded() {
      this.tabAmount = this.tabAmount + 1;
      this.$forceUpdate();
    },
    setActiveTab(tabIndex) {
      this.$emit('input', tabIndex);
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";
  .mat-tabs-wrapper {
    position: relative;
  }
  .mat-tabs {
    display: flex;
    border-bottom: 1px solid #f3f3f3;
    overflow-x: scroll;
    width: 100%;
    -ms-overflow-style: none;  // IE 10+
    scrollbar-width: none;  // Firefox
    &::-webkit-scrollbar {
      display: none;  // Safari and Chrome
    }

    &-ink-line {
      background: black;
      bottom: 0;
      height: 2px;
      left: 0;
      position: absolute;
      transition: all 0.3s ease;
      will-change: left, width;
    }
  }
</style>
