import "@testing-library/jest-dom";
import { act, fireEvent, render } from "@testing-library/react";
import * as React from "react";
import renderer from "react-test-renderer";
import Pagination from "./Pagination";

// Heads up! we're only gonna test "minimal" variant
// since "group" variant's API is just a copy of "minimal"
// but "minimal" is a bit complex
describe("Pagination", () => {
  const renderPagination = (
    props: Partial<{
      page: number;
      pageSize: number;
      total: number;
      onChange: (value: { page: number; pageSize: number }) => void;
    }> = {},
  ) => {
    return render(
      <Pagination
        variant="minimal"
        page={1}
        pageSize={5}
        count={100}
        onChange={function () {}}
        {...props}
      />,
    );
  };

  it.skip("Should be able to go to next page", async () => {
    const onChange = jest.fn();
    const { getByRole } = renderPagination({ page: 1, onChange });

    await act(async () => {
      fireEvent.click(getByRole("button", { name: "Go to next page" }));
    });

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        page: 2,
        pageSize: expect.any(Number),
      }),
    );
  });

  it("Should be able to go to previous page", async () => {
    const onChange = jest.fn();
    const { getByRole } = renderPagination({ page: 2, onChange });

    await act(async () => {
      fireEvent.click(getByRole("button", { name: "Go to previous page" }));
    });

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        page: 1,
        pageSize: expect.any(Number),
      }),
    );
  });

  it.skip("Should match snapshot", () => {
    const component = renderer.create(
      <Pagination
        variant="minimal"
        page={1}
        pageSize={5}
        count={100}
        onChange={function () {
          //
        }}
      />,
    );

    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
    component.unmount();
  });
});
