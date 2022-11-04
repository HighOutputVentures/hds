module.exports = {
  rollup(config, options) {
    config.plugins = [...config.plugins];

    return config;
  },
};
