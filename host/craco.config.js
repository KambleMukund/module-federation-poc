const cracoModuleFederation = require('craco-module-federation');

module.exports = {
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
  mode: "development",
  // Adding Server
  devServer: {
    port: 3000,
  },
};
