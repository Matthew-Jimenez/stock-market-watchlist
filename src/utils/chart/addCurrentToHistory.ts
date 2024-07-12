import { HistoricalPrice, Quote } from "types/api";
import dateFromMillis from "utils/dates/dateFromMillis";
import roundCurrentByInterval from "./roundCurrentByInterval";
import dateFromFormat from "utils/dates/dateFromFormat";

interface Params {
  history?: HistoricalPrice[];
  quote?: Quote;
  range: number;
}

const addCurrentToHistory = ({ history, quote, range }: Params) => {
  if (range > 30) {
    return history;
  }

  // the last point in historcal pricing
  const lastHistoryPoint = history?.[history.length - 1];

  // round the current point to the nearest 5 minutes
  // considerations: we may need to round to nearest 15min, 30min, 1hr, etc.
  const dateString = roundCurrentByInterval({
    date: dateFromMillis({ date: quote?.timestamp })?.toFormat(
      "yyyy-MM-dd HH:mm:ss"
    ),
    interval: { value: 5, unit: "min" },
  });

  // define the current point using the rounded date
  // and the price from the quote
  const current = quote?.price
    ? {
        date: dateFromFormat({
          date: dateString,
          format: "yyyy-MM-dd HH:mm:ss",
        })
          ?.set({ second: 0 })
          .toFormat("yyyy-MM-dd HH:mm:ss"),
        close: quote.price,
      }
    : (undefined as HistoricalPrice | undefined);

  // if there is no current point or no last point in history
  if (!current?.date || !lastHistoryPoint) {
    return history;
  }

  // current is past the last element in history
  if (current.date > lastHistoryPoint.date) {
    return [...history, current as HistoricalPrice];
  }

  // if the rounded date is not greater than the last element in history
  // then we replace the last element in history with the current point
  return [...history.slice(0, -1), current as HistoricalPrice];
};

export default addCurrentToHistory;
