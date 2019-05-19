<template>
  <div id="app">
    <mat-toolbar type="primary" :dark="dark" position="sticky" top="0">
      andyfeely.com
      <mat-spacer></mat-spacer>
    </mat-toolbar>
    <div class="main">
      <mat-card>
        <mat-padding padding="15px">
          <mat-padding padding="0 0 15px">
            <mat-tabs v-model="windowValue">
              <mat-tab :tab-key="0">
                Window 1
              </mat-tab>
              <mat-tab :tab-key="1">
                Window 2
              </mat-tab>
              <mat-tab :tab-key="2">
                Window 3 - with a little extra
              </mat-tab>
              <mat-tab :tab-key="3">
                Window 4
              </mat-tab>
            </mat-tabs>
          </mat-padding>
          <mat-window v-model="windowValue">
            <mat-window-item :value="0">
              Window 1
            </mat-window-item>
            <mat-window-item :value="1">
              <mat-code :value="singleCode" lang="html" />
            </mat-window-item>
            <mat-window-item :value="2">
              <mat-code :value="singleCode" lang="html" />
            </mat-window-item>
            <mat-window-item :value="3">
              Window 3
            </mat-window-item>
          </mat-window>
        </mat-padding>
      </mat-card>
    </div>
  </div>
</template>

<script>
import { MatCode, MatWindow, MatWindowItem, MatTab, MatTabs } from './components/blocks';

export default {
  name: 'app',
  data: () => ({
    windowValue: 0,
    dark: false,
    singleCode: '<mat-select\n'
      + '  v-model="singleValue"\n'
      + '  placeholder="Select single"\n'
      + '  :single-value="true"\n'
      + '  :options="singleSelect"\n'
      + '/>',
  }),
  components: {
    MatCode,
    MatWindow,
    MatWindowItem,
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
