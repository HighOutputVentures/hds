const { exec } = require('child_process');

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

async function main() {
  console.log('Checking changed packages...');
  const output = await execAsync('lerna changed --ndjson');

  const packages = output
    .trim()
    .split(/\r?\n/)
    .map((line) => JSON.parse(line).name.replace('@unofficial-hds/', ''));

  const count = packages.length;

  if (count > 0) {
    console.log(count + ' changed packages found');
    console.log('Building...');

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
    console.log('No projects to build');
  }

  console.log('Done');
}

main();
