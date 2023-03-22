module.exports = {
  rollup(config) {
    config.plugins = [...config.plugins];

    return config;
  },
};
