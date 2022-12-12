import { BoxProps } from "@chakra-ui/react";
import * as React from "react";
import GroupPagination, { GroupPaginationProps } from "./GroupPagination";
import MinimalPagination, { MinimalPaginationProps } from "./MinimalPagination";
import omit from "./utils";

export type PaginationProps =
  | ({ variant?: "minimal" } & MinimalPaginationProps)
  | ({ variant: "group" } & GroupPaginationProps);

export default function Pagination(props: PaginationProps & BoxProps) {
  switch (props.variant) {
    case "group":
      return <GroupPagination {...omit(props, "variant")} />;
    default:
      return <MinimalPagination {...omit(props, "variant")} />;
  }
}
