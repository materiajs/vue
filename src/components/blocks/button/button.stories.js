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
        <tb-button>
          Submit
        </tb-button>
        <tb-button color="warn">
          Warn
        </tb-button>
        <tb-button color="primary">
          Primary
        </tb-button>
        <br>
        <br>
          <h3>
            With icons
          </h3>
         <tb-button>
          Submit
          <template slot="right">
            <tb-fa icon="check" />
          </template>
        </tb-button>
        <tb-button color="warn">
          <template slot="right">
            <tb-fa icon="exclamation-triangle" />
          </template>
          Warn
        </tb-button>
        <tb-button color="primary">
         Icon left
           <template slot="left">
            <tb-fa icon="angle-left" />
          </template>
        </tb-button>
      </div>
    `,
  }));
