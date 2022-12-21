import { Grid, GridItem, Text } from '@chakra-ui/react';
import * as React from 'react';
import { ThemeProvider } from '../../../hds/dist';

type GridViewProps = {
  data: Record<string, any>;
};

export default function GridView({ data }: GridViewProps) {
  return (
    <ThemeProvider>
      <Grid templateColumns="repeat(5, 1fr)" gridAutoRows="60px" gap={8}>
        {Object.entries(data).map(([label, Component]) => {
          return (
            <GridItem
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              gap={2}
            >
              <Component />

              <Text fontSize="xs" color="neutrals.700">
                {label}
              </Text>
            </GridItem>
          );
        })}
      </Grid>
    </ThemeProvider>
  );
}
