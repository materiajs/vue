<template>
  <div
    :class="getChipClass"
    class="chip"
    @click="onChipClicked"
    :style="{ 'background-color': color }">
    <i
      v-if="icon"
      :class="icon"
      class="fa main-icon"></i>
    <span class="chip-value">
      {{ value }}
    </span>
    <span
      v-if="closeable"
      @click.stop="onRemove"
      class="chip-close-area">
      <i class="fa fa-times close-icon"></i>
    </span>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'Chip',
  props: {
    clickable: t.bool.def(false),
    closeable: t.bool.def(false),
    color: t.string,
    disabled: t.bool.def(false),
    icon: t.string,
    onClick: t.func,
    onRemove: t.func,
    size: t.oneOf(['small', 'regular', 'large']).def('regular'),
    value: t.oneOfType([t.string, t.number]),
  },
  computed: {
    getChipClass() {
      return [
        this.size ? `chip-size-${this.size}` : 'chip-size-regular',
        this.closeable ? 'closeable' : '',
        this.disabled ? 'disabled' : '',
        this.clickable ? 'clickable' : '',
      ];
    },
  },
  methods: {
    onChipClicked() {
      if (this.onClick) {
        this.onClick();
      }
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";

  .chip {
    align-items: center;
    background: $primary-color;
    border-radius: $border-radius-standard;
    color: #fff;
    display: flex;
    font-size: 14px;
    overflow: hidden;

    span.chip-value {
      padding: 3px 10px;
    }

    &.closeable {
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15), -1px 1px 3px 1px rgba(0, 0, 0, 0.15);
    }

    &.clickable {
      cursor: pointer;
    }

    i.main-icon {
      padding-right: 5px;
    }
    &-close-area {
      align-items: center;
      cursor: pointer;
      display: flex;
      font-size: 12px;
      padding: 0 6px 0 5px;
      margin-left: -3px;
      min-height: 25px;
      &:hover {
        background: rgba(0,0,0,0.1);
      }
    }
    &.chip-size-small {
      font-size: 12px;
      span.chip-value {
        padding: 1px 8px;
      }
    }
    &.chip-size-large {
      font-size: 14px;
      span.chip-value {
        padding: 5px 10px;
      }
    }

    &.disabled {
      background: white !important;
      color: #888;
      box-shadow: 0px 0px 1px #999;
    }
  }
</style>
