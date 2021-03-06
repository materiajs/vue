<template>
  <div
    @click="onClickInputWrapper"
    class="mat-input mat-frame"
    :class="{ focused: isFocused }"
    :style="wrapperStyle"
    v-on-clickaway="onInputBlur"
  >
    <slot />
    <input
      v-if="type !== 'textarea'"
      ref="blox-input-ref"
      :value="value"
      :style="getDarkElementStyle"
      :type="type"
      @input="onInputChange"
      @focus="onInputFocus">
    <textarea
      v-else
      ref="blox-input-ref"
      :value="value"
      @input="onInputChange"
      @focus="onInputFocus"
    />
    <slot name="input-right" />
    <div
      v-if="showClearButton"
      @click.stop="clearValue"
      class="mat-input-clear-button">
      <i class="fa fa-times-circle"></i>
    </div>
    <div
      class="mat-frame-placeholder"
      :class="{ focused: isFocused, raised: placeholderRaised }"
      :style="getDarkElementStyle"
    >
      <div class="mat-frame-placeholder-bg"></div>
      {{ placeholder }}
    </div>
  </div>
</template>

<script>
import t from 'vue-types';
import { mixin as clickaway } from 'vue-clickaway';
import themeable, { defaultAccentColor } from '../../../mixins/themeable';

export default {
  name: 'mat-input',
  mixins: [
    clickaway,
    themeable,
  ],
  props: {
    darkColor: defaultAccentColor,
    focused: t.bool.def(false),
    placeholder: t.string.def('Enter text'),
    raisePlaceholder: t.bool.def(false),
    showClearButton: t.bool.def(false),
    type: t.oneOf(['text', 'number', 'password', 'textarea']),
    value: t.string.def(''),
  },
  data: () => ({
    inputFocused: false,
  }),
  computed: {
    isFocused() {
      return this.focused || this.inputFocused;
    },
    placeholderRaised() {
      return this.raisePlaceholder || (this.value && this.value.length > 0) || this.inputFocused;
    },
    wrapperStyle() {
      return { ...this.getDarkElementStyle };
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
      if (this.inputFocused) {
        this.$emit('focus', false);
        this.inputFocused = false;
      }
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
  @import "../../../styles/main";

  .mat-input {
    cursor: text;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    input {
      flex: 1;
    }
    textarea {
      border: none;
      resize: vertical;
      outline: none;
      flex: 1;
      font-family: inherit;
      font-size: 1rem;
      height: 200px;
    }

    &-clear-button {
      color: $text-color-light;
      cursor: pointer;
      margin: -10px;
      padding: 10px;
    }
  }
</style>
