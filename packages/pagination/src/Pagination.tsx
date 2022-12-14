import { SystemStyleObject } from "@chakra-ui/react";
import * as React from "react";
import GroupPagination, { GroupPaginationProps } from "./GroupPagination";
import MinimalPagination, { MinimalPaginationProps } from "./MinimalPagination";

export type PaginationProps =
  | ({ variant: "minimal" } & MinimalPaginationProps)
  | ({ variant: "group" } & GroupPaginationProps);

export default function Pagination(props: PaginationProps & SystemStyleObject) {
  switch (props.variant) {
    case "group":
      return <GroupPagination {...props} />;
    default:
      return <MinimalPagination {...props} />;
  }
}
