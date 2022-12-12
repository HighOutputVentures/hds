import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import * as React from "react";
import Pagination from "./Pagination";
import { PaginationBaseProps } from "./types";

describe("Pagination", () => {
  const renderPagination = (props: Partial<PaginationBaseProps> = {}) => {
    return render(
      <Pagination
        variant="minimal"
        page={1}
        pageSize={5}
        total={100}
        onPageChange={function () {}}
        {...props}
      />,
    );
  };

  it.todo("Should be able to display legend");
  it.todo("Should be able to show page controls");

  it("Should be able to go to next page", () => {
    const onPageChange = jest.fn();
    const { getByRole } = renderPagination({ page: 1, onPageChange });

    fireEvent.click(getByRole("button", { name: "Go to next page" }));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it("Should be able to go to previous page", () => {
    const onPageChange = jest.fn();
    const { getByRole } = renderPagination({ page: 2, onPageChange });

    fireEvent.click(getByRole("button", { name: "Go to previous page" }));
    expect(onPageChange).toHaveBeenCalledWith(1);
  });
});
