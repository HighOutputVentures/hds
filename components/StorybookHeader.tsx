import { Text, Box, Code } from "@chakra-ui/react";
import React from "react";

import ThemeProvider from "../packages/hds/src/components/ThemeProvider";

interface StorybookHeaderProps {
  title: string;
  command: string;
}

const StorybookHeader: React.FC<StorybookHeaderProps> = ({
  title,
  command,
}) => {
  return (
    <ThemeProvider>
      <Box marginBottom={20}>
        <Text size="header-3" marginBottom={5}>
          {title}
        </Text>
        <Text size="paragraph-md-default" marginBottom={2}>
          To install package, run command:
        </Text>
        <Code colorScheme="yellow" children={command} />
      </Box>
    </ThemeProvider>
  );
};

export default StorybookHeader;
