// @ts-check

import fs from 'fs/promises';
import path from 'path';

const template = `
import { Global } from "@emotion/react";
import * as React from "react";
export default function CarouselStyle() {
  return <Global styles={\`css\`} />;
}`;

async function copyCarouselStyles() {
  const dirname = path.dirname('.');

  const location = 'node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
  const fullPath = path.resolve(dirname, '../..', location);

  const styles = await fs.readFile(fullPath, { encoding: 'utf-8' });
  const target = path.resolve(dirname, 'src/CarouselStyle.generated.tsx');

  await fs.writeFile(target, template.replace(/css/, styles), { encoding: 'utf-8' });
}

await copyCarouselStyles();
