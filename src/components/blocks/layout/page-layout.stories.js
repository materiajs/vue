import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';

storiesOf('Blocks/PageLayout', module)
  .addDecorator(VueInfoAddon)
  .add('Basic usage', () => ({
    template: `
      <div>
        <tb-page-layout>
          Content here.
          
          This element always fills to at least the bottom of the screen
        </tb-page-layout>
        <tb-page-layout :dark="true">
          Content here
        </tb-page-layout>
      </div>
    `,
  }));
