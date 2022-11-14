import { Text } from "@chakra-ui/react";
import React from "react";

import ThemeProvider from "../packages/hds/src/components/ThemeProvider";

interface StorybookTitleProps {
  title: string;
}

const StorybookTitle: React.FC<StorybookTitleProps> = ({ title }) => {
  return (
    <ThemeProvider>
      <Text size="heading-web-4">{title}</Text>
    </ThemeProvider>
  );
};

export default StorybookTitle;
