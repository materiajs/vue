<template>
  <div
    @click.stop="onClickCheckbox"
    class="mat-checkbox">
    <div
      :class="{ checked: value }"
      class="mat-checkbox-box mat-frame mat-flex-center">
      <transition name="mat-fade">
        <i
          v-if="value"
          class="fas fa-check mat-absolute-center"></i>
      </transition>
    </div>
    <div class="mat-checkbox-label">
      {{ text }}
    </div>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'mat-checkbox',
  props: {
    text: t.string,
    value: t.bool.def(false),
    size: t.oneOf(['regular', 'small', 'large']),
  },
  methods: {
    onClickCheckbox() {
      this.$emit('input', !this.value);
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";

  $frame-size: 20px;
  .mat-checkbox {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    &-box {
      border-radius: 5px;
      color: white;
      font-size: 14px;
      display: inline-block;
      margin-right: 10px;
      min-height: $frame-size;
      min-width: $frame-size;
      padding: 0;

      &.checked {
        background: $primary-color;
        border: 1px solid $primary-color;
      }
    }
  }
</style>
