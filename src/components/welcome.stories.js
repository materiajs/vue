import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';

storiesOf('Toolblox', module)
  .add('Welcome', () => ({
    data: () => ({
      links: [
        'Install guide',
        'Examples',
        'Theming',
      ],
    }),
    methods: {
      onSelectLink(kind) {
        linkTo('Toolblox', kind)();
      },
    },
    template: `
      <div style="padding: 15px;">
        <mat-title>Toolblox</mat-title>
        <mat-title :subtitle="true" size="xs" >Welcome</mat-title>
        <mat-line-break color="primary"/>
        <p>
          Toolblox is a library of Vue components that I am currently building.
        </p>
        <p>
          It is by no means production ready and is only fit for demo purposes so far.
        </p>
        <mat-toolbar 
          size="small"
          color="primary-light"
          :shadow="false">
          Contents
          <mat-spacer />
        </mat-toolbar>
        <mat-list :bordered="true">
          <div
            v-for="link in links" 
            @click="onSelectLink(link)">
            <mat-fa icon="circle" size="small" />
            {{ link }}  
          </div>
        </mat-list>
      </div>
    `,
  }));
