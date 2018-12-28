module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/_main.scss";
          @import "@/styles/_variables.scss";
          @import "node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss";
        `,
      },
    },
  },
};
