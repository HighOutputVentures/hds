import {
  Box,
  Button,
  Icon,
  IconButton,
  SystemStyleObject,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";
import { Carousel as ReactResponsiveCarousel } from "react-responsive-carousel";
import CarouselStyle from "./CarouselStyle";
import ChevronLeftIcon from "./ChevronLeftIcon";
import ChevronRightIcon from "./ChevronRightIcon";

type CarouselSize = "md" | "lg";

type CarouselVariant = "dot" | "dash";

export type CarouselProps<T extends unknown[]> = SystemStyleObject & {
  items: T;
  size?: CarouselSize;
  loop?: boolean;
  variant?: CarouselVariant;
  autoPlay?: boolean;
  isSwipeable?: boolean;
  wrapIndicator?: boolean;
  children: (item: T[number], index: number) => React.ReactNode;
};

export default function Carousel<T extends unknown[]>({
  variant = "dot",
  size = "md",
  items,
  loop,
  autoPlay,
  isSwipeable,
  wrapIndicator,
  children,
  ...props
}: CarouselProps<T>) {
  const styles = useMultiStyleConfig("Carousel", {
    variant: "hds",
    __size: size,
    __variant: variant,
    __wrapped: wrapIndicator,
  });

  return (
    <Box
      sx={{
        ...props,
        ...styles.container,
        ".control-dots": styles.dots,
      }}
    >
      <CarouselStyle />
      <ReactResponsiveCarousel
        width="100%"
        autoPlay={autoPlay}
        swipeable={isSwipeable}
        emulateTouch={isSwipeable}
        infiniteLoop={loop}
        interval={5000}
        showStatus={false}
        showThumbs={false}
        stopOnHover={false}
        renderArrowNext={(handler, _hasNext, label) => (
          <IconButton
            variant="unstyled"
            aria-label={label}
            icon={<Icon as={ChevronRightIcon} />}
            onClick={handler}
            sx={styles.arrow}
          />
        )}
        renderArrowPrev={(handler, _hasPrev, label) => (
          <IconButton
            variant="unstyled"
            aria-label={label}
            icon={<Icon as={ChevronLeftIcon} />}
            onClick={handler}
            sx={styles.arrow}
          />
        )}
        renderIndicator={(handler, isSelected, index, label) => {
          return (
            <Button
              variant="unstyled"
              tabIndex={0}
              onClick={handler}
              onKeyDown={handler}
              aria-label={`${label} ${index + 1}`}
              data-selected={isSelected}
              sx={styles.dot}
            />
          );
        }}
        labels={{
          item: "Slide",
          leftArrow: "previous slide",
          rightArrow: "next slide",
        }}
      >
        {items.map((item, index) => (
          <React.Fragment key={`${index}${item}`}>{children(item, index)}</React.Fragment>
        ))}
      </ReactResponsiveCarousel>
    </Box>
  );
}
