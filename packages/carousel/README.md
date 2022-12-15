### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```bash
npm i @highoutput/hds-carousel
```

### Usage

```tsx
import { Carousel, withCarousel } from "@highoutput/hds-carousel";
import { ThemeProvider, extendTheme, AspectRatio, Image } from "@highoutput/hds";

const items: { image: string }[] = [
  /* data here... */
];

export default function Example() {
  return (
    <ThemeProvider theme={extendTheme(withCarousel())}>
      <Carousel
        loop
        autoPlay
        size="md"
        variant="dot"
        isSwipeable
        wrapIndicator
        items={items}
        width="600px"
      >
        {({ image }) => (
          <AspectRatio height="350px" ratio={16 / 9}>
            <Image src={image} alt="" />
          </AspectRatio>
        )}
      </Carousel>
    </ThemeProvider>
  );
}
```
