import intradayTicks from "../fixtures/intraday-ticks";
import generateChartTicks from "./generateChartTicks";

describe("generateChartTicks", () => {
  it("should return an empty array if no date is provided", () => {
    const ticks = generateChartTicks();
    expect(ticks).toEqual([]);
  });

  it("should return an array of ticks for a range of 1", () => {
    const ticks = generateChartTicks("2024-07-01 12:10:00", 1);
    expect(ticks).toEqual(intradayTicks);
  });
});
