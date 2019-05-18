<template>
  <div id="app">
    <tb-toolbar type="primary" :dark="dark" position="sticky" top="0">
      andyfeely.com
      <tb-spacer></tb-spacer>
    </tb-toolbar>
    <div class="main">
      <tb-card>
        <tb-padding padding="15px">
          <tb-padding padding="0 0 15px">
            <tb-tabs v-model="windowValue">
              <tb-tab :tab-key="0">
                Window 1
              </tb-tab>
              <tb-tab :tab-key="1">
                Window 2
              </tb-tab>
              <tb-tab :tab-key="2">
                Window 3 - with a little extra
              </tb-tab>
              <tb-tab :tab-key="3">
                Window 4
              </tb-tab>
            </tb-tabs>
          </tb-padding>
          <tb-window v-model="windowValue">
            <tb-window-item :value="0">
              Window 1
            </tb-window-item>
            <tb-window-item :value="1">
              <tb-code :value="singleCode" lang="html" />
            </tb-window-item>
            <tb-window-item :value="2">
              <tb-code :value="singleCode" lang="html" />
            </tb-window-item>
            <tb-window-item :value="3">
              Window 3
            </tb-window-item>
          </tb-window>
        </tb-padding>
      </tb-card>
    </div>
  </div>
</template>

<script>
import { TbCode, TbWindow, TbWindowItem, TbTab, TbTabs } from './components/blocks';

export default {
  name: 'app',
  data: () => ({
    windowValue: 0,
    dark: false,
    singleCode: '<tb-select\n'
      + '  v-model="singleValue"\n'
      + '  placeholder="Select single"\n'
      + '  :single-value="true"\n'
      + '  :options="singleSelect"\n'
      + '/>',
  }),
  components: {
    TbCode,
    TbWindow,
    TbWindowItem,
  },
};
</script>

<style lang="scss">
  @import "~highlight.js/styles/github.css";
  .main {
    margin: 15px auto;
    max-width: 800px;
  }
</style>
