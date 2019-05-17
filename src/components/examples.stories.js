import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';

storiesOf('Toolblox', module)
  .add('Examples', () => ({
    data: () => ({
      input2Placeholder: 'Custom placeholder',
      selectedOptions: [],
      options: [
        {
          value: 'Option 1',
        },
        {
          value: 'Option 2',
        },
        {
          value: 'Option 3',
        },
      ],
    }),
    methods: {
      onSelectStorybook(kind) {
        linkTo(kind)();
      },
    },
    template: `
      <div style="padding: 15px;">
        <tb-title>Toolblox</tb-title>
        <tb-title :subtitle="true" size="xs" >Welcome</tb-title>
        <tb-line-break color="primary"/>
        <p>
         Here are some examples of the components available.
        </p>
        <p>
         Be sure to check out the component's storybook to see API docs and more detailed examples.
        </p>
        <tb-spacer />
        <tb-card>
          <tb-padding padding="15px">
            <tb-toolbar size="small" color="accent" :shadow="false">
              Input
              <tb-spacer />
              <tb-nav-link @click="onSelectStorybook('Input')">
                <tb-fa icon="bookmark" />Stories
              </tb-nav-link>
            </tb-toolbar>
            <tb-spacer />
            <tb-input></tb-input>
            <tb-spacer />
            <tb-input 
              :placeholder="input2Placeholder"
              v-model="input2Placeholder"></tb-input>
            <tb-spacer />
            <tb-input 
              placeholder="Clear button on right"
              :show-clear-button="true"></tb-input>
          </tb-padding>
        </tb-card>
        <tb-spacer />
        <tb-card>
          <tb-padding padding="15px">
            <tb-toolbar size="small" color="primary-light" :shadow="false">
              Select
              <tb-spacer />
              <tb-nav-link @click="onSelectStorybook('Select')">
                <tb-fa icon="bookmark" />Stories
              </tb-nav-link>
            </tb-toolbar>
            <tb-spacer />
            <tb-select
              v-model="selectedOptions"
              placeholder="Select an option"
              :options="options"
            />
          </tb-padding>
        </tb-card>
      </div>
    `,
  }));
