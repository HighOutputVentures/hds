import React from "react";
import { Box } from "@chakra-ui/react";

import ThemeProvider from "../../packages/hds/src/components/ThemeProvider";
import ReleaseDetailsV1 from "./Release-11-11-22";
import ReleaseDetailsV2 from "./Release-11-16-22";
import ReleaseDetailsV3 from "./Release-11-22-22";
import ReleaseDetailsV4 from "./Release-12-07-22";
import ReleaseDetailsV5 from "./Release-12-16-22";
import ReleaseDetailsV6 from "./Release-01-04-23";
import ReleaseDetailsV7 from "./Release-01-26-23";

const Release = () => {
  return (
    <ThemeProvider>
      <ReleaseDetailsV7 />
      <Box mt={12}></Box>

      <ReleaseDetailsV6 />
      <Box mt={12}></Box>

      <ReleaseDetailsV5 />
      <Box mt={12}></Box>

      <ReleaseDetailsV4 />
      <Box mt={12}></Box>

      <ReleaseDetailsV3 />
      <Box mt={12}></Box>

      <ReleaseDetailsV2 />
      <Box mt={12}></Box>

      <ReleaseDetailsV1 />
    </ThemeProvider>
  );
};

export default Release;
