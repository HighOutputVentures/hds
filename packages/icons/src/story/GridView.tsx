import { Grid, GridItem, IconProps, Text } from '@chakra-ui/react';
import * as React from 'react';
import { ThemeProvider } from '../../../hds/dist';

type GridViewProps = {
  data: Record<string, any>;
};

export default function GridView(props: GridViewProps & IconProps) {
  const { data, ...others } = props;

  return (
    <ThemeProvider>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gridAutoRows="60px"
        rowGap={12}
        columnGap={8}
      >
        {Object.entries(data).map(([label, Component]) => {
          return (
            <GridItem
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              gap={2}
            >
              <Component width="24px" height="24px" {...others} />
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
