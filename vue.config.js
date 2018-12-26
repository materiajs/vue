module.exports = {
  css: {
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
