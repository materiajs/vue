<template>
  <div
    @click="onClickInputWrapper"
    class="tb-input tb-frame"
    :class="{ focused: inputFocused, slim }"
    v-click-outside="onInputBlur">
    <slot />
    <input
      ref="blox-input-ref"
      :value="value"
      @input="onInputChange"
      @focus="onInputFocus"
      :type="type">
    <div
      class="tb-frame-placeholder"
      :class="{ focused: inputFocused, raised: placeholderRaised }">
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
    raisePlaceholder: t.bool.def(false),
    placeholder: t.string.def('Enter text'),
    type: t.oneOf(['text', 'number', 'password']),
    slim: t.bool.def(false),
    value: t.string.def(''),
  },
  data: () => ({
    inputFocused: false,
  }),
  directives: {
    ClickOutside,
  },
  computed: {
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

    &.slim {
      padding: 5px 10px;
      input {
        font-size: 14px;
      }
    }
  }
</style>
