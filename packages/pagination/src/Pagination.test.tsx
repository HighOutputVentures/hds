import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import * as React from "react";
import Pagination from "./Pagination";

describe("Pagination", () => {
  const renderPagination = (
    props: Partial<{
      page: number;
      pageSize: number;
      total: number;
      onPageChange: (newPage: number) => void;
    }> = {},
  ) => {
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

  it("Should be able to display legend", () => {
    const { queryByText } = renderPagination();
    expect(queryByText(`Page 1 of 20`)).toBeDefined();
  });

  it("Should be able to show page controls", () => {
    const { queryByRole, queryAllByRole } = renderPagination();
    expect(queryByRole("button", { name: /Go to previous page/ })).toBeDefined();
    expect(queryByRole("button", { name: /Go to next page/ })).toBeDefined();
    // This is the "..." 🦄
    expect(queryByRole("button", { name: /Go to page \.{3}/ })).toBeDefined();
    expect(queryAllByRole("button", { name: /Go to page \d+/ })).toHaveLength(6);
  });

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
