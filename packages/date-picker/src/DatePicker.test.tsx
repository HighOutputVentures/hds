import { ThemeProvider } from "@highoutput/hds";
import { render, screen } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import { DatePicker } from "./DatePicker";
import DatePickerDropdown from "./DatePickerDropdown";
import DatePickerModal from "./DatePickerModal";

const MOCKDATA = [
  { date: new Date("2022-9-3"), title: "appointment", id: "1" },
  { date: new Date("2022-11-25"), title: "second", id: "3" },
  { date: new Date("2022-9-25"), title: "doctor", id: "2" },
  { date: new Date("2022-12-6"), title: "bd", id: "1" },
  { date: new Date("2022-12-23"), title: "bd", id: "1" },
];

describe("Datepicker pre-set range type Component", () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <DatePicker
          dateEvents={MOCKDATA}
          type={"pre-set ranges"}
          userId="1"
          onClose={jest.fn()}
          isOpen={true}
          timezone={"Asia/Manila"}
        />
      </ThemeProvider>,
    );
  });

  it("Should render", async () => {
    const RangeDatePicker = await screen.findAllByTestId(
      "hds.range-datepicker",
    );
    expect(RangeDatePicker).toHaveLength(1);
  });
});

describe("Datepicker single date type Component", () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <DatePicker
          dateEvents={MOCKDATA}
          type={"single date"}
          userId="1"
          onClose={jest.fn()}
          isOpen={true}
          timezone={"Asia/Manila"}
        />
      </ThemeProvider>,
    );
  });

  it("Should render", async () => {
    const SingleDatePicker = await screen.findAllByTestId(
      "hds.single-datepicker",
    );
    expect(SingleDatePicker).toHaveLength(1);
  });
});

describe("Datepicker dual date type Component", () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <DatePicker
          dateEvents={MOCKDATA}
          type={"dual dates"}
          userId="1"
          onClose={jest.fn()}
          isOpen={true}
          timezone={"Asia/Manila"}
        />
      </ThemeProvider>,
    );
  });

  it("Should render", async () => {
    const DualDatePicker = await screen.findAllByTestId("hds.dual-datepicker");
    expect(DualDatePicker).toHaveLength(1);
  });
});

describe("Datepicker modal Component", () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <DatePickerModal
          dateEvents={MOCKDATA}
          type={"dual dates"}
          userId="1"
          timezone={"Asia/Manila"}
        />
      </ThemeProvider>,
    );
  });

  it("Should render", async () => {
    const ModalDatePicker = await screen.findAllByTestId(
      "hds.modal-datepicker",
    );
    expect(ModalDatePicker).toHaveLength(1);
  });
});

describe("Datepicker dropdown Component", () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <DatePickerDropdown
          dateEvents={MOCKDATA}
          type={"dual dates"}
          userId="1"
          onClose={jest.fn()}
          isOpen={true}
          timezone={"Asia/Manila"}
        />
      </ThemeProvider>,
    );
  });

  it("Should render", async () => {
    const DropdownDatePicker = await screen.findAllByTestId(
      "hds.dropdown-datepicker",
    );
    expect(DropdownDatePicker).toHaveLength(1);
  });
});

describe("Snapshots", () => {
  it("(DatePicker Preset Range) Should match snapshot", () => {
    const component = renderer.create(
      <DatePicker
        dateEvents={MOCKDATA}
        type="pre-set ranges"
        userId="1"
        onClose={noop}
        isOpen
        timezone="Asia/Manila"
      />,
    );
    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
    component.unmount();
  });

  it("(DatePicker Single Date) Should match snapshot", () => {
    const component = renderer.create(
      <ThemeProvider>
        <DatePicker
          dateEvents={MOCKDATA}
          userId="1"
          type="single date"
          onClose={noop}
          timezone="Asia/Manila"
          isOpen
        />
      </ThemeProvider>,
    );
    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
    component.unmount();
  });

  it("(DatePicker Dual Date) Should match snapshot", () => {
    const component = renderer.create(
      <ThemeProvider>
        <DatePicker
          dateEvents={MOCKDATA}
          type="dual dates"
          userId="1"
          onClose={noop}
          isOpen
          timezone="Asia/Manila"
        />
      </ThemeProvider>,
    );
    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
    component.unmount();
  });

  it("(DatePickerModal) Should match snapshot", () => {
    const component = renderer.create(
      <ThemeProvider>
        <DatePickerModal
          dateEvents={MOCKDATA}
          type="dual dates"
          userId="1"
          timezone="Asia/Manila"
        />
      </ThemeProvider>,
    );
    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
    component.unmount();
  });

  it("(DatePickerDropdown) Should match snapshot", () => {
    const component = renderer.create(
      <ThemeProvider>
        <DatePickerDropdown
          dateEvents={MOCKDATA}
          timezone="Asia/Manila"
          type="dual dates"
          userId="1"
          onClose={noop}
          isOpen
        />
      </ThemeProvider>,
    );
    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
    component.unmount();
  });
});

function noop(..._args: any) {}
