<template>
  <div
    @click="onClickInputWrapper"
    class="tb-input tb-frame"
    :class="{ focused: isFocused }"
    v-click-outside="onInputBlur">
    <slot />
    <input
      ref="blox-input-ref"
      :value="value"
      @input="onInputChange"
      @focus="onInputFocus"
      :type="type">
    <slot name="input-right" />
    <div
      v-if="showClearButton"
      @click.stop="clearValue"
      class="tb-input-clear-button">
      <i class="fa fa-times-circle"></i>
    </div>
    <div
      class="tb-frame-placeholder"
      :class="{ focused: isFocused, raised: placeholderRaised }">
      {{ placeholder }}
    </div>
  </div>
</template>

<script>
import t from 'vue-types';
import { ClickOutside } from '@/directives';

export default {
  name: 'tb-input',
  props: {
    focused: t.bool.def(false),
    placeholder: t.string.def('Enter text'),
    raisePlaceholder: t.bool.def(false),
    showClearButton: t.bool.def(false),
    type: t.oneOf(['text', 'number', 'password']),
    value: t.string.def(''),
  },
  data: () => ({
    inputFocused: false,
  }),
  directives: {
    ClickOutside,
  },
  computed: {
    isFocused() {
      return this.focused || this.inputFocused;
    },
    placeholderRaised() {
      return this.raisePlaceholder || this.value.length > 0 || this.inputFocused;
    },
  },
  methods: {
    onInputChange(inputEvent) {
      const { value } = inputEvent.target;
      this.$emit('input', value);
    },
    onClickInputWrapper() {
      this.$refs['blox-input-ref'].focus();
    },
    onInputFocus() {
      this.$emit('focus', true);
      this.inputFocused = true;
    },
    onInputBlur() {
      this.$emit('focus', false);
      this.inputFocused = false;
    },
    clearValue() {
      this.$emit('input', '');
      this.$emit('cleared', true);
      this.onInputBlur();
    },
  },
};
</script>

<style scoped lang="scss">
  .tb-input {
    cursor: text;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    input {
      flex: 1;
    }

    &-clear-button {
      color: $text-color-light;
      cursor: pointer;
      margin: -10px;
      padding: 10px;
    }
  }
</style>
