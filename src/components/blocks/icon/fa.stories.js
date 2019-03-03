import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';


storiesOf('Blocks/Fa', module)
  .addDecorator(VueInfoAddon)
  .add('Basic usage', () => ({
    data: () => ({
      value: false,
    }),
    methods: {
      close() {
        this.value = false;
      },
      open() {
        console.debug('open'); // TODO - Remove console output
        this.value = true;
      },
    },
    template: `
      <div>
      <div style="text-align: right">
        <tb-fa
          size="large"
          :action="open"
          icon="angle-down" >
          <tb-action-box
          v-click-outside="close"
          position="bottom-right" :value="value">
            <div style="padding: 15px; min-width: 200px">
              Position bottom right - click here to close
            </div>
          </tb-action-box>
        </tb-fa>
      </div>
</div>
    `,
  }));
