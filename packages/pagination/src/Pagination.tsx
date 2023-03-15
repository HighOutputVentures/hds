import { SystemStyleObject } from "@chakra-ui/react";
import * as React from "react";
import GroupPagination, { GroupPaginationProps } from "./GroupPagination";
import MinimalPagination, { MinimalPaginationProps } from "./MinimalPagination";
import RelayPagination, { RelayPaginationProps } from "./RelayPagination";

export type PaginationProps =
  | ({ variant: "minimal" } & MinimalPaginationProps)
  | ({ variant: "relay" } & RelayPaginationProps)
  | ({ variant: "group" } & GroupPaginationProps);

export default function Pagination(props: PaginationProps & SystemStyleObject) {
  switch (props.variant) {
    case "minimal":
      return <MinimalPagination {...props} />;
    case "group":
      return <GroupPagination {...props} />;
    case "relay":
      return <RelayPagination {...props} />;
    default:
      throw new Error("Unsupported pagination variant");
  }
}
