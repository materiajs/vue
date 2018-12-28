<template>
  <div
    @click="onClickSelect"
    v-click-outside="onCloseSelect"
    class="tb-select">
    <tb-input
      v-model="searchString"
      :placeholder="placeholder"
      :raise-placeholder="selectedItemsAsChips.length > 0"
      @input="onChangeSearchText">
      <tb-chip-list
        v-if="selectedItemsAsChips.length" :chips="selectedItemsAsChips" />
    </tb-input>
    <div class="tb-select-action-box-wrapper">
      <tb-action-box :value="open">
        <tb-list :items="listItems">
          <template slot-scope="{ item }">
            <!--The slot passed to the list component can be defined by parent of Select.vue-->
            <slot v-bind:option="item.option">
              {{ item.option }}
            </slot>
          </template>
        </tb-list>
        <div
          v-if="listItems.length === 0"
          class="tb-padding-standard">
          No results
        </div>
      </tb-action-box>
    </div>
  </div>
</template>

<script>
import t from 'vue-types';
import Fuse from 'fuse.js';
import { ClickOutside } from '@/directives';
import { TbInput, TbList } from '@/components/blocks';
import { TbActionBox, TbChipList } from '@/components/composites';

export default {
  name: 'tb-select',
  props: {
    fuseOptions: t.object,
    placeholder: t.string,
    options: t.array,
    value: t.arrayOf(t.object),
  },
  components: {
    TbActionBox,
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
  directives: {
    ClickOutside,
  },
  computed: {
    mergedFuseOptions() {
      return { ...this.baseFuseOptions, ...this.fuseOptions };
    },
    filteredOptions() {
      if (!this.searchString) {
        return this.options;
      }
      const fuse = new Fuse(this.options, this.mergedFuseOptions);
      return fuse.search(this.searchString);
    },
    listItems() {
      return this.filteredOptions
        .map(option => ({ option, onClick: () => this.selectOption(option) }));
    },
    selectedItemsAsChips() {
      return this.value.map(option => ({
        value: option.value,
        onRemove: () => this.deselectOption(option),
        closeable: true,
      }));
    },
  },
  methods: {
    onClickSelect() {
      this.open = true;
    },
    onCloseSelect() {
      this.open = false;
    },
    onChangeSearchText(val) {
      console.debug(val); // TODO - Remove console output
    },
    onInputFocus(val) {
      this.open = val;
    },
    selectOption(option) {
      if (this.getSelectedOptionIndex(option) === -1) {
        const selectedOptions = [...this.value];
        selectedOptions.push(option);
        this.$emit('input', selectedOptions);
      }
    },
    deselectOption(option) {
      const { value } = this;
      const optionIndex = this.getSelectedOptionIndex(option);
      value.splice(optionIndex, 1);
      this.$emit('input', value);
    },
    getSelectedOptionIndex(option) {
      return this.value.indexOf(option);
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
    }
  }
</style>
