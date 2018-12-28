module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/_main.scss";
          @import "@/styles/_variables.scss";
        `,
      },
    },
  },
};
