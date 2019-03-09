import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import PageBuilder from '../structures/page/PageBuilder.vue';

storiesOf('Examples/Page example', module)
  .addDecorator(VueInfoAddon)
  .add('Navigation bar', () => ({
    components: {
      PageBuilder,
    },
    data: () => ({
      dark: false,
      iconHovered: false,
    }),
    template: `
      <div>
        <tb-toolbar type="primary" :dark="dark">
        Storybook
        <tb-spacer />
        <tb-nav-link>
          <div @click="() => dark = !dark">
            Toggle dark
          </div>
        </tb-nav-link>
      </tb-toolbar>
      <tb-page-layout :dark="dark" dark-color="primary-light">
        <page-builder :dark="dark" />
      </tb-page-layout>
    </div>
    `,
  }));
