import oneDayHistory from "test-utils/fixtures/history/oneDay";

import addCurrentToHistory from "./addCurrentToHistory";
import { Quote } from "types/api";
// import dateFromMillis from "utils/dates/dateFromMillis";
import dateFromFormat from "utils/dates/dateFromFormat";

describe("addCurrentToHistory", () => {
  it("should return history if range is greater than 30", () => {
    const history = oneDayHistory;

    const quote = {
      price: 100,
      timestamp: 1626289200000,
    } as Quote;

    const range = 31;

    const result = addCurrentToHistory({ history, quote, range });

    expect(result).toEqual(history);
  });

  it("should push current onto history, if current is past the last element in history", () => {
    const history = oneDayHistory;
    const quote = {
      price: 100,
      timestamp: dateFromFormat({
        date: history[history.length - 1].date,
        format: "yyyy-MM-dd HH:mm:ss",
      })
        ?.plus({ minute: 30 })
        .toSeconds(),
    } as Quote;
    const range = 1;

    const result = addCurrentToHistory({ history, quote, range });

    // ensure that the last element in the result is the current point
    expect(result).toEqual([
      ...history,
      { date: "2024-07-01 16:00:00", close: 100 },
    ]);
  });

  it("should replace the last element in history with current, if current is the same time as the last element in history", () => {
    // set up the test
    const history = oneDayHistory;
    const quote = {
      price: 100,
      timestamp: dateFromFormat({
        date: history[history.length - 1].date,
        format: "yyyy-MM-dd HH:mm:ss",
      })
        ?.minus({ minute: 1 })
        .toSeconds(),
    } as Quote;
    const range = 1;

    const result = addCurrentToHistory({ history, quote, range });

    // ensure that the last element in the result is the current point
    expect(result?.[result.length - 1]).toEqual({
      date: history[history.length - 1].date,
      close: 100,
    });

    // ensure that we actually replaced and not just added
    expect(result).toHaveLength(history.length);
  });
});
