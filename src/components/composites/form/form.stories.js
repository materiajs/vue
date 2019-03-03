import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { withKnobs, boolean } from '@storybook/addon-knobs';

storiesOf('Composites/Form', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('Basic usage', () => {
    const dark = boolean('dark', false);
    return {
      data() {
        return {
          name: '',
          age: '',
          dob: '',
          dark,
        };
      },
      methods: {
        buttonAction() {
          this.dark = !this.dark;
        },
      },
      template: `
    <tb-form title="Title" :dark="dark">
      <tb-form-header :dark="dark" color="accent">Header</tb-form-header>
      <tb-input :dark="dark" v-model="name" placeholder="Name"/>
      <tb-input :dark="dark" v-model="age" placeholder="Age"/>
      <tb-input :dark="dark" v-model="dob" placeholder="DOB"/>
      <tb-form-divider />
      <tb-button :action="buttonAction" text="Click me!" />
    </tb-form>
    `,
    };
  });
