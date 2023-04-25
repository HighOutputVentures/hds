// @ts-check

const { exec } = require('child_process');

/**
 * @param {string} command
 * @return {Promise<string>} */
function execAsync(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, output) => {
      if (error) {
        reject(error);
      } else {
        resolve(output);
      }
    });
  });
}

/**
 * @typedef Package
 * @property {string} name
 * @property {string} version
 * @property {boolean} private
 * @property {string} location
 */

async function main() {
  console.log('Checking changed packages...');

  const output = await execAsync('lerna changed --ndjson');
  const packages = output
    .trim()
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => {
      /**
       * @type {Package}
       */
      const { name } = JSON.parse(line);
      const prefix = '@highoutput/hds-';

      return name === '@highoutput/hds' ? 'hds' : name.replace(prefix, '');
    });

  const count = packages.length;

  if (count > 0) {
    console.log(count + ' changed packages found');
    console.log('Building changed and affected packages...');

    const build = [
      'nx run-many',
      '--all',
      '--target=build',
      '--projects=' + packages.join(),
      '--target=build',
      '--parallel',
      '--maxParallel=100%',
      '--skip-nx-cache',
    ].join(' ');

    await execAsync(build);
  } else {
    console.log('No package changed');
  }

  console.log('Done');
}

main();
