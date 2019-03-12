<template>
  <tb-padding>
    <tb-toolbar
      :shadow="false"
      size="xs"
      :color="getComponentMeta ? getComponentMeta.color : 'accent'"
      :dark="getComponentMeta ? getComponentMeta.dark : false"
    >
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
            size="large" icon="redo-alt"></tb-fa>
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
        class="tb-handle"
        icon="arrows-alt"></tb-fa>
      <component-select @select="onSelectComponent" />
      <tb-fa
        v-if="getComponentOptions"
        :action="() => { optionsOpen = true; }"
        icon="cog">
        <tb-action-box
          v-model="optionsOpen"
          position="bottom-right"
          size="large"
          @close="() => { optionsOpen = false }"
        >
          <tb-padding padding="15px">
            <div
              v-for="(option, key) in getComponentOptions"
              :key="key"
            >
              <tb-padding padding="5px">
                <tb-title size="xs" padding="0 0 10px">
                  {{ option.displayName }}
                </tb-title>
                <tb-button-group>
                  <tb-button
                    v-for="item in option.selectOptions"
                    :action="() => onSelectOption(option.name, item.value)"
                    :color="component.value[option.name] === item.value ? 'primary-light' : null">
                    {{ item.name }}
                  </tb-button>
                </tb-button-group>
              </tb-padding>
            </div>
          </tb-padding>
        </tb-action-box>
      </tb-fa>
      <tb-fa :icon="isMinimized ? 'window-maximize' : 'window-minimize'" :action="onToggleMinimized"></tb-fa>
      <tb-select
        :single-value="true"
        position="bottom-right"
        :close-on-select="true">
        <template slot="trigger">
          <tb-fa icon="ellipsis-v"></tb-fa>
        </template>
        <div @click="onRemoveComponent">
          <tb-fa icon="trash"></tb-fa>Remove
        </div>
        <div @click="onSaveAsTemplate">
          <tb-fa icon="trash"></tb-fa>Remove
        </div>
      </tb-select>
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
  data: () => ({
    optionsOpen: false,
  }),
  components: {
    ComponentSelect: () => import('./ComponentSelect.vue'),
  },
  methods: {
    onSelectOption(optionName, value) {
      this.value = {
        ...this.value,
        [optionName]: value,
      };
    },
  },
};
</script>
