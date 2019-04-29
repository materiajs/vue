<template>
  <div id="app">
    <tb-toolbar type="primary" :dark="dark" position="sticky" top="0">
      andyfeely.com
      <tb-spacer></tb-spacer>
      <tb-nav-link>
        <div @click="() => dark = !dark">
          Toggle dark
        </div>
      </tb-nav-link>
    </tb-toolbar>

  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    dark: false,
  }),
};
</script>

<style lang="scss">
</style>
