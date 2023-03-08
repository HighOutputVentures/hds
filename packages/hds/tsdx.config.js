module.exports = {
  rollup(config, options) {
    const outputDir = process.cwd() + '/dist/';
    const extension = '.' + config.output.file.split('.').slice(1).join('.');
    let filename = config.input.split('src/')[1];

    filename = filename?.split('.')[0];

    const fileName = config.input === './src/index.tsx' ? 'hds' : filename;
    config.output.file = outputDir + fileName + extension;

    config.output.name = filename?.replace('/', '__');

    return config;
  },
};
