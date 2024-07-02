import { fireEvent, render, screen } from "@testing-library/react";

import RangeSelector from "./component";

describe("RangeSelector", () => {
  it("should render the correct ranges", () => {
    render(<RangeSelector range={1} onSetRange={(val: number) => {}} />);

    expect(screen.getByTestId("button--1D")).toBeInTheDocument();
    expect(screen.getByTestId("button--1W")).toBeInTheDocument();
    expect(screen.getByTestId("button--1M")).toBeInTheDocument();
    expect(screen.getByTestId("button--3M")).toBeInTheDocument();
    expect(screen.getByTestId("button--1Y")).toBeInTheDocument();
    expect(screen.getByTestId("button--5Y")).toBeInTheDocument();
  });

  it.each([
    { range: 1, buttonTestId: "button--1W", expected: 5 },
    { range: 5, buttonTestId: "button--1D", expected: 1 },
    { range: 5, buttonTestId: "button--1M", expected: 30 },
    { range: 30, buttonTestId: "button--3M", expected: 90 },
    { range: 30, buttonTestId: "button--1Y", expected: 365 },
    { range: 30, buttonTestId: "button--5Y", expected: 1825 },

    // Add more test cases as needed
  ])(
    "should call set range with correct value for range %p",
    ({ range, buttonTestId, expected }) => {
      const onSetRange = jest.fn();
      render(<RangeSelector range={range} onSetRange={onSetRange} />);

      fireEvent.click(screen.getByTestId(buttonTestId));
      expect(onSetRange).toHaveBeenCalledWith(expected);
    }
  );
});
