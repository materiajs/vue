import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';

storiesOf('PageLayout', module)
  .addDecorator(VueInfoAddon)
  .add('Basic usage', () => ({
    template: `
      <div>
        <mat-page-layout>
          Content here.
          
          This element always fills to at least the bottom of the screen
        </mat-page-layout>
        <mat-container>
          MatContainer
          <br>
          This has a max-width of 650px and can be used for docs, articles etc.
        </mat-container>
      </div>
    `,
  }));
