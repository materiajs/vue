import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';


storiesOf('Fa', module)
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
        this.value = true;
      },
    },
    template: `
      <div>
      <div style="display: flex; align-items: center; justify-content: center;">
        <mat-fa
          size="large"
          :action="open"
          icon="angle-down" >
          <mat-action-box
            @close="close"
            position="bottom-right" 
            :value="value">
            <div style="padding: 15px; min-width: 200px">
              Position bottom right - click away to close
            </div>
          </mat-action-box>
        </mat-fa>
      </div>
</div>
    `,
  }));
