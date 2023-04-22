const { glob } = require('glob');
const path = require('path');
const fs = require('fs');
const prettier = require('prettier');

function getRootPackageJsonDeps() {
  const filepath = path.join(process.cwd(), 'package.json');
  const contents = fs.readFileSync(filepath, { encoding: 'utf-8' });

  return JSON.parse(contents).dependencies ?? {};
}

async function syncDeps() {
  const packageJsonFiles = await glob('packages/**/package.json');
  const rootDependencies = getRootPackageJsonDeps();

  for (const packageJsonFile of packageJsonFiles) {
    const filepath = path.join(process.cwd(), packageJsonFile);
    const contents = fs.readFileSync(filepath, { encoding: 'utf-8' });
    const packageJson = JSON.parse(contents);

    if (!packageJson.dependencies) continue;

    for (const key in packageJson.dependencies) {
      if (
        rootDependencies[key] &&
        rootDependencies[key] !== packageJson.dependencies[key]
      ) {
        packageJson.dependencies[key] = rootDependencies[key];
      }
    }

    const prettierrc = await prettier.resolveConfig(process.cwd());
    const formatted = prettier.format(JSON.stringify(packageJson, null, 2), {
      ...prettierrc,
      parser: 'json',
    });

    fs.writeFileSync(filepath, formatted, { encoding: 'utf-8' });
  }
}

syncDeps();
