<template>
  <tb-padding padding="0 0 15px">
    <tb-toolbar
      :shadow="false" size="xs" color="accent">
      <slot />
      <tb-select
        v-if="component.canBind"
        :single-value="true"
        position="bottom-right"
        :close-on-select="true">
        <template slot="trigger">
          <tb-fa size="large" icon="plug" />
        </template>
        <div
          v-for="(option, key) in dataOptions"
          @click="() => { value = option; }"
          :key="key"
        >
          {{ option.name }}
        </div>
      </tb-select>
      <tb-select
        :single-value="true"
        position="bottom-right"
        :close-on-select="true">
        <template slot="trigger">
          <tb-fa
            v-if="!component.repeat"
            size="large" icon="redo-alt" />
          <span v-else >
            Repeat: {{ component.repeat}}
          </span>
        </template>
        <div
          v-for="(option, key) in repeatOptions"
          @click="() => onSetRepeat(option.value)"
          :key="key"
        >
          {{ option.name }}
        </div>
      </tb-select>
      <tb-fa
        :action="moveOrderUp"
        icon="arrow-up" />
      <tb-fa
        :action="moveOrderDown"
        icon="arrow-down" />
      <component-select @select="onSelectComponent" />
    </tb-toolbar>
  </tb-padding>
</template>

<script>
import { builder } from '@/mixins';

export default {
  name: 'BuilderToolbar',
  mixins: [
    builder,
  ],
  components: {
    ComponentSelect: () => import('./ComponentSelect.vue'),
  },
};
</script>

<style scoped>

</style>
