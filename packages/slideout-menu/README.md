### Getting started

Many websites use slideout navigations to hide menu items. Slideout menus are similar and allow for more content to be available to the user without taking up extra space on the screen. They behave similar to a modal, but with the added benefit of taking up less prominent screen real estate and are easier to scroll for longer content requirements.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-slideout-menu
```

### Usage

```tsx
import SideoutMenu, { SlideoutMenuRef } from '@highoutput/hds-slideout-menu';

export const SideoutMenuSample = () => {
  return (
    <SlideoutMenu triggerContent="Click me!" header="Messages">
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu
        lorem, tempor pulvinar lorem sit amet, semper cursus neque. Praesent vel
        imperdiet urna, at venenatis lectus. Suspendisse potenti. Curabitur
        turpis est, interdum quis metus ut, mollis dapibus lacus. Morbi luctus,
        leo maximus ultricies auctor, lorem nibh pharetra magna, mollis
        ultricies turpis sapien non libero. Maecenas lorem sapien, iaculis sed
        tincidunt nec, pharetra nec dolor. Quisque ultricies, elit sed tristique
        rhoncus, velit dui gravida mauris, eget aliquet nunc lectus id ex.
        Nullam iaculis gravida justo, vel efficitur velit finibus sed. Donec
        laoreet odio eget tortor porttitor, eget interdum neque imperdiet.
        Suspendisse eget elit non sem condimentum mattis vitae non odio.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Suspendisse venenatis felis magna, vel sollicitudin mi tincidunt eu.
      </>
    </SlideoutMenu>
  );
};
```
