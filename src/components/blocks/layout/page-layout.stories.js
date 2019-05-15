import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';

storiesOf('PageLayout', module)
  .addDecorator(VueInfoAddon)
  .add('Basic usage', () => ({
    template: `
      <div>
        <tb-page-layout>
          Content here.
          
          This element always fills to at least the bottom of the screen
        </tb-page-layout>
        <tb-container>
          TbContainer
          <br>
          This has a max-width of 650px and can be used for docs, articles etc.
        </tb-container>
      </div>
    `,
  }));
