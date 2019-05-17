import { storiesOf } from '@storybook/vue';

storiesOf('Toolblox', module)
  .add('Install guide', () => ({
    template: `
      <div style="padding: 15px;">
        <tb-title>Toolblox</tb-title>
        <tb-title :subtitle="true" size="xs" >Install guide</tb-title>
        <tb-line-break color="accent"/>
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
  <tb-spacer />
  <tb-spacer/>
  You can also just import components directly if you dont like global registration.
  Ensure you import the main stylesheet somewhere in your app if you do it this way.
  <pre class="code html hljs xml">
@import "~toolblox/src/styles/main";</pre>
Then import straight from src:
<pre class="code html hljs xml">
import TbToolbar from 'toolblox/src/components/blocks/toolbar/Toolbar.vue';
import TbNavLink from 'toolblox/src/components/blocks/navigation/NavLink.vue';

components: {
  TbFa,
  TbToolbar,
  TbNavLink,
  TbSpacer
}</pre>
  <tb-title :subtitle="true" size="xs" >Install options:</tb-title>
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
