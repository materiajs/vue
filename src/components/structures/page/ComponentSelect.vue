<template>
  <tb-select
    :value="[]"
    :single-value="true"
    :close-on-select="true"
    @input="component => $emit('select', component)"
    placeholder="Add component to layout"
    :options="components"
  >
    <template slot-scope="{ option }">
      {{ option.title }}
    </template>
  </tb-select>
</template>

<script>
import { TbInput } from '@/components/blocks';
import FlexLayoutBuilder from './FlexLayoutBuilder.vue';

export default {
  name: 'ComponentSelect',
  data: () => ({
    components: [
      { component: TbInput, title: 'TbInput Text area', props: { type: 'textarea' } },
      { component: TbInput, title: 'TbInput' },
      { component: FlexLayoutBuilder, title: 'Flex builder layout', children: [] },
    ],
  }),
};
</script>

<style scoped>

</style>
