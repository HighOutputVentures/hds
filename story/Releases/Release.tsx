import React from "react";
import { Box } from "@chakra-ui/react";

import ThemeProvider from "../../packages/hds/src/components/ThemeProvider";
import ReleaseDetailsV1 from "./Release-11-11-22";
import ReleaseDetailsV2 from "./Release-11-16-22";

const Release = () => {
  return (
    <ThemeProvider>
      <ReleaseDetailsV2 />
      <Box mt={12}></Box>
      <ReleaseDetailsV1 />
    </ThemeProvider>
  );
};

export default Release;
