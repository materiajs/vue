<template>
  <pre v-highlightjs="value"><code :class="lang" /></pre>
</template>

<script>
import t from 'vue-types';
import hljs from 'highlight.js';

export default {
  name: 'Code',
  props: {
    lang: t.string,
    value: t.string,
  },
  directives: {
    highlightjs: {
      deep: true,
      bind(el, binding) {
        // on first bind, highlight all targets
        const targets = el.querySelectorAll('code');
        targets.forEach((target) => {
          // if a value is directly assigned to the directive, use this
          // instead of the element content.
          if (binding.value) {
            // eslint-disable-next-line
            target.textContent = binding.value;
          }
          hljs.highlightBlock(target);
        });
      },
      componentUpdated(el, binding) {
        // after an update, re-fill the content and then highlight
        const targets = el.querySelectorAll('code');
        targets.forEach((target) => {
          if (binding.value) {
            // eslint-disable-next-line
            target.textContent = binding.value;
            hljs.highlightBlock(target);
          }
        });
      },
    },
  },
};
</script>

<style scoped>
  pre, code {
    margin: 0;
  }
</style>
