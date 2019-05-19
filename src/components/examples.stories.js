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
        <mat-title>Toolblox</mat-title>
        <mat-title :subtitle="true" size="xs" >Welcome</mat-title>
        <mat-line-break color="primary"/>
        <p>
         Here are some examples of the components available.
        </p>
        <p>
         Be sure to check out the component's storybook to see API docs and more detailed examples.
        </p>
        <mat-spacer />
        <mat-card>
          <mat-padding padding="15px">
            <mat-toolbar size="small" color="accent" :shadow="false">
              Input
              <mat-spacer />
              <mat-nav-link @click="onSelectStorybook('Input')">
                <mat-fa icon="bookmark" />Stories
              </mat-nav-link>
            </mat-toolbar>
            <mat-spacer />
            <mat-input></mat-input>
            <mat-spacer />
            <mat-input 
              :placeholder="input2Placeholder"
              v-model="input2Placeholder"></mat-input>
            <mat-spacer />
            <mat-input 
              placeholder="Clear button on right"
              :show-clear-button="true"></mat-input>
          </mat-padding>
        </mat-card>
        <mat-spacer />
        <mat-card>
          <mat-padding padding="15px">
            <mat-toolbar size="small" color="primary-light" :shadow="false">
              Select
              <mat-spacer />
              <mat-nav-link @click="onSelectStorybook('Select')">
                <mat-fa icon="bookmark" />Stories
              </mat-nav-link>
            </mat-toolbar>
            <mat-spacer />
            <mat-select
              v-model="selectedOptions"
              placeholder="Select an option"
              :options="options"
            />
          </mat-padding>
        </mat-card>
      </div>
    `,
  }));
