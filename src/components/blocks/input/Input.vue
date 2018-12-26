<template>
  <div
    @click="onInputFocus"
    class="tb-input tb-frame"
    :class="{ focused: inputFocused }">
    <input
      ref="blox-input-ref"
      :value="value"
      @input="onInputChange"
      @focus="onInputFocus"
      @blur="onInputBlur"
      :type="type">
    <div
      @blur="onInputBlur"
      class="tb-input-placeholder"
      :class="{ focused: inputFocused, raised: placeholderRaised }">
      {{ placeholder }}
    </div>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'tb-input',
  props: {
    placeholder: t.string.def('Enter text'),
    type: t.oneOf(['text', 'number', 'password']),
    value: t.string.def(''),
  },
  data: () => ({
    inputFocused: false,
  }),
  computed: {
    placeholderRaised() {
      return this.value.length > 0 || this.inputFocused;
    },
  },
  methods: {
    onInputChange(inputEvent) {
      const { value } = inputEvent.target;
      this.$emit('input', value);
    },
    onInputFocus() {
      this.$refs['blox-input-ref'].focus();
      this.inputFocused = true;
    },
    onInputBlur() {
      this.inputFocused = false;
    },
  },
};
</script>

<style scoped lang="scss">
  .tb-input {
    cursor: text;
    position: relative;

    input {
      outline: none;
      border: none;
      width: 100%;
      font-size: 16px;
    }
    &-placeholder {
      border-radius: 50%;
      color: $secondary-text-color;
      margin: 0 -3px;
      padding: 0 3px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: $standard-transition;
      &.raised {
        background: white;
        top: 0;
        font-size: 0.8em;
      }
      &.focused {
        color: $primary-color-dark;
      }
    }
  }
</style>
