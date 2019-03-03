import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { TbFlexLayout, TbFlexItem, TbGridLayout } from '@/components/blocks';
import ComponentSelect from '../structures/page/ComponentSelect.vue';

storiesOf('Examples/Page example', module)
  .addDecorator(VueInfoAddon)
  .add('Navigation bar', () => ({
    components: {
      ComponentSelect,
    },
    data: () => ({
      dark: false,
      iconHovered: false,
      layouts: [
        {
          component: TbFlexLayout,
          props: {},
          title: 'Flex layout',
          children: [],
          childWrapper: TbFlexItem,
        },
        { component: TbGridLayout, title: 'Grid layout', children: [] },
      ],
      addedComponents: [],
      addedLayouts: [],
    }),
    methods: {
      close() {
        this.iconHovered = false;
      },
      open() {
        this.iconHovered = true;
      },
      onSelectComponent(component) {
        this.addedComponents.push(component);
      },
      onSelectLayout(layout) {
        this.addedLayouts.push(layout);
      },
    },
    template: `
      <div>
        <tb-toolbar type="primary" :dark="dark">
        Storybook
        <tb-spacer />
        <tb-nav-link>
          <div @click="() => dark = !dark">
            Toggle dark
          </div>
        </tb-nav-link>
      </tb-toolbar>
      <tb-page-layout :dark="dark" dark-color="primary-light">
       <tb-margin margin="-15px -15px 15px">
          <tb-toolbar :dark="dark" color="primary-light" size="small" :shadow="false">
            Some sort of page title here
            <tb-spacer />
            <div>
              <tb-fa
                v-click-outside="close"
                :action="open"
                icon="angle-down"
              >
                <tb-action-box
                  position="bottom-right"
                  :value="iconHovered"
                >
                  <div style="padding: 15px; min-width: 200px; color: #000;">
                    Position bottom right - click here to close
                  </div>
                </tb-action-box>
              </tb-fa>
            </div>
          </tb-toolbar>
        </tb-margin>
        <component-select @select="onSelectComponent" />
        <!--<tb-grid-layout columns="3">-->
          <!--<tb-flex-layout v-for="component in addedComponents">-->
            <!--<tb-flex-item flex="1">-->
              <!--<component -->
                <!--:is="component"-->
                <!--/>-->
            <!--</tb-flex-item>-->
            <!--<tb-fa :action="() => addedComponents.pop()" size="large" icon="times" />-->
          <!--</tb-flex-layout>-->
        <!--</tb-grid-layout>-->
        <template v-for="component in addedComponents">
          <tb-padding padding="0 0 15px">
            <component :is="component.component" v-model="component.children" v-bind="component.props">
              <!--<component-->
              <!--v-for="component in layout.children"-->
              <!--:is="layout.childWrapper">-->
                <!--<component :is="component.component" v-bind="component.props" />-->
              <!--</component>-->
            </component>
          </tb-padding>
        </template>
      </tb-page-layout>
      </div>
    `,
  }));
