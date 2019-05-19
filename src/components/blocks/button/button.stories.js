import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';

storiesOf('Button', module)
  .addDecorator(VueInfoAddon)
  .add('Basic usage', () => ({
    data: () => ({
      value: '',
    }),
    template: `
      <div>
        <mat-button>
          Submit
        </mat-button>
        <mat-button color="warn">
          Warn
        </mat-button>
        <mat-button color="primary">
          Primary
        </mat-button>
        <br>
        <br>
          <h3>
            With icons
          </h3>
         <mat-button>
          Submit
          <template slot="right">
            <mat-fa icon="check" />
          </template>
        </mat-button>
        <mat-button color="warn">
          <template slot="right">
            <mat-fa icon="exclamation-triangle" />
          </template>
          Warn
        </mat-button>
        <mat-button color="primary">
         Icon left
           <template slot="left">
            <mat-fa icon="angle-left" />
          </template>
        </mat-button>
      </div>
    `,
  }));
