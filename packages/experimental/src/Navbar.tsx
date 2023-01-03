import { Box, BoxProps } from "@chakra-ui/react";
import * as React from "react";

export default function Navbar({ children, ...props }: BoxProps) {
  return (
    <Box
      as="header"
      gap={4}
      width="full"
      display="flex"
      position="sticky"
      alignItems="center"
      justifyContent="space-between"
      bgColor="whiteAlpha.800"
      backdropFilter="blur(4px)"
      transition="all"
      transitionDuration="300ms"
      top={0}
      zIndex={9}
      role="banner"
      aria-label="Page header"
      {...props}
    >
      {children}
    </Box>
  );
}
