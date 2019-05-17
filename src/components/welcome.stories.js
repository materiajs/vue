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
        <tb-title>Toolblox</tb-title>
        <tb-title :subtitle="true" size="xs" >Welcome</tb-title>
        <tb-line-break color="primary"/>
        <p>
          Toolblox is a library of Vue components that I am currently building.
        </p>
        <p>
          It is by no means production ready and is only fit for demo purposes so far.
        </p>
        <tb-toolbar 
          size="small"
          color="primary-light"
          :shadow="false">
          Contents
          <tb-spacer />
        </tb-toolbar>
        <tb-list :bordered="true">
          <div
            v-for="link in links" 
            @click="onSelectLink(link)">
            <tb-fa icon="circle" size="small" />
            {{ link }}  
          </div>
        </tb-list>
      </div>
    `,
  }));
