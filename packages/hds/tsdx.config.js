module.exports = {
  rollup(config, options) {
    const outputDir = process.cwd() + '/dist/';
    const extension = '.' + config.output.file.split('.').slice(1).join('.');
    let filename = config.input.split('src/')[1]; // remove src/

    filename = filename.split('.')[0]; // remove extension, if any

    const fileName = config.input === './src/index.tsx' ? 'hds' : filename;
    config.output.file = outputDir + fileName + extension;

    // replace / with __ for UMD names
    config.output.name = filename.replace('/', '__');
    c;
    return config;
  },
};
