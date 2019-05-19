import { storiesOf } from '@storybook/vue';

storiesOf('Toolblox', module)
  .add('Install guide', () => ({
    template: `
      <div style="padding: 15px;">
        <mat-title>Toolblox</mat-title>
        <mat-title :subtitle="true" size="xs" >Install guide</mat-title>
        <mat-line-break color="accent"/>
        <p>
          First install Toolblox with npm:
        </p>
        <pre class="code html hljs xml">
  npm install toolblox</pre>
        <p>
          Toolblox is simple to use as a Vue plugin:
        </p>
        <pre class="code html hljs xml">
        
  import Vue from 'vue';
  import Toolblox from 'toolblox';
  
  Vue.use(Toolblox);
  </pre>
  <mat-spacer />
  <mat-spacer/>
  You can also just import components directly if you dont like global registration.
  Ensure you import the main stylesheet somewhere in your app if you do it this way.
  <pre class="code html hljs xml">
@import "~toolblox/src/styles/main";</pre>
Then import straight from src:
<pre class="code html hljs xml">
import MatToolbar from 'toolblox/src/components/blocks/toolbar/Toolbar.vue';
import MatNavLink from 'toolblox/src/components/blocks/navigation/NavLink.vue';

components: {
  MatFa,
  MatToolbar,
  MatNavLink,
  MatSpacer
}</pre>
  <mat-title :subtitle="true" size="xs" >Install options:</mat-title>
  <pre class="code html hljs xml">
        
  import Vue from 'vue';
  import Toolblox from 'toolblox';
  
  const options = {
    theme: {
      primary: '#0288D1',
      accent: '#448AFF',
      'primary-light': '#81d4fa',
    },
  };
  Vue.use(Vuex);
  Vue.use(Toolblox, options);
  </pre>
      </div>
    `,
  }));
