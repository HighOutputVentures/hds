import { MultiStyleConfig } from "@chakra-ui/react";

export default function withTable() {
  const Table: MultiStyleConfig = {
    parts: [],
    variants: {
      hds: {},
    },
  };

  return { components: { Table } };
}
