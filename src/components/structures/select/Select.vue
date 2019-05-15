<template>
  <div
    @click="onClickSelect"
    class="tb-select">
    <slot name="trigger">
      <tb-input
        v-model="searchString"
        :placeholder="placeholder"
        :focused="open"
        :raise-placeholder="valueNotNull"
        :show-clear-button="!isSingleValue"
        @cleared="clearValue">
        <div v-if="singleValue && value">
          {{ value.value }}
        </div>
        <tb-chip-list
          v-else-if="selectedItemsAsChips.length" :chips="selectedItemsAsChips" />
      </tb-input>
    </slot>
    <div class="tb-select-action-box-wrapper">
      <tb-action-box
        @close="onCloseSelect"
        :position="position" :value="open">
        <tb-list
          v-if="listItems.length"
          :items="listItems">
          <template slot="item" slot-scope="{ item }">
            <tb-checkbox
              v-if="showCheckboxes"
              :value="isSelected(item.option)"
              @input="() => onClickOption(item.option)"
            />
            <!--The slot passed to the list component can be defined by parent of Select.vue-->
            <slot name="item" v-bind:option="item.option">
              {{ item.option.value }}
            </slot>
          </template>
          <slot />
        </tb-list>
        <div
          v-else
          class="tb-select-action-box-wrapper-no-options"
        >
          No options
        </div>
      </tb-action-box>
    </div>
  </div>
</template>

<script>
import t from 'vue-types';
import isEmpty from 'lodash/isEmpty';
import Fuse from 'fuse.js';
import themeable from '@/mixins/themeable';
import { TbInput, TbList, TbCheckbox } from '@/components/blocks';
import { TbActionBox, TbChipList } from '@/components/composites';

export default {
  name: 'tb-select',
  mixins: [
    themeable,
  ],
  props: {
    closeOnSelect: t.bool.def(false),
    singleValue: t.bool.def(false),
    fuseOptions: t.object,
    hideSelected: t.bool.def(false),
    options: t.array,
    placeholder: t.string,
    showCheckboxes: t.bool.def(false),
    value: t.oneOfType([t.object, t.arrayOf(t.object)]),
    position: t.string.def('bottom-left'),
  },
  components: {
    TbActionBox,
    TbCheckbox,
    TbChipList,
    TbList,
    TbInput,
  },
  data: () => ({
    baseFuseOptions: {
      threshold: 0.5,
      keys: ['value'],
    },
    open: false,
    searchString: '',
  }),
  computed: {
    isSingleValue() {
      return this.singleValue === true;
    },
    valueNotNull() {
      return !isEmpty(this.value);
    },
    mergedFuseOptions() {
      return { ...this.baseFuseOptions, ...this.fuseOptions };
    },
    filteredOptions() {
      let { options } = this;
      if (this.hideSelected) {
        options = options.filter((option) => {
          if (this.isSingleValue) {
            return this.value !== option;
          }
          return this.value.indexOf(option) === -1;
        });
      }
      if (!this.searchString) {
        return options;
      }
      const fuse = new Fuse(options, this.mergedFuseOptions);
      return fuse.search(this.searchString);
    },
    listItems() {
      return this.filteredOptions
        .map(option => ({ option, onClick: () => this.onClickOption(option) }));
    },
    selectedItemsAsChips() {
      if (this.singleValue) { // Dont have chips for singles
        return [];
      }
      return this.value ? this.value.map(option => ({
        value: option.value,
        onRemove: () => this.deselectOption(option),
        closeable: true,
      })) : [];
    },
  },
  methods: {
    onClickSelect() {
      this.open = true;
    },
    onCloseSelect() {
      this.open = false;
    },
    onInputFocus(val) {
      this.open = val;
    },
    onClickOption(option) {
      if (!this.isSelected(option)) {
        this.selectOption(option);
      } else {
        this.deselectOption(option);
      }
    },
    selectOption(option) {
      if (this.closeOnSelect) {
        setTimeout(() => {
          this.onCloseSelect();
        }, 10);
      }
      if (this.isSingleValue) {
        this.$emit('input', option);
        return;
      }
      const selectedOptions = [...this.value];
      selectedOptions.push(option);
      this.$emit('input', selectedOptions);
    },
    deselectOption(option) {
      if (this.isSingleValue) {
        this.$emit('input', null);
        return;
      }
      const { value } = this;
      const optionIndex = this.getSelectedOptionIndex(option);
      value.splice(optionIndex, 1);
      this.$emit('input', value);
    },
    getSelectedOptionIndex(option) {
      return this.value.indexOf(option);
    },
    isSelected(option) {
      if (this.isSingleValue) {
        return this.value === option;
      }
      return this.getSelectedOptionIndex(option) > -1;
    },
    clearValue() {
      if (this.isSingleValue) {
        this.$emit('input', null);
      }
      this.$emit('input', []);
    },
  },
};
</script>

<style scoped lang="scss">
  .tb-select {
    cursor: text;

    .tb-chip-list {
      margin: -5px 0;
    }
    &-action-box-wrapper {
      position: relative;
      &-no-options {
        padding: 15px;
      }
    }
  }
</style>
