import { HistoricalPrice, Quote } from "types/api";
import dateFromMillis from "utils/dates/dateFromMillis";
import roundCurrentByInterval from "./roundCurrentByInterval";
import dateFromFormat from "utils/dates/dateFromFormat";

interface Params {
  history?: HistoricalPrice[];
  quote?: Quote;
  // in minutes
  interval?: {
    value: number;
    unit: "min" | "hour" | "day" | "week";
  };
}

const getIntervalForRange = (range: number) => {
  switch (range) {
    case 1: {
      return "5min";
    }

    case 5: {
      return "15min";
    }

    case 30: {
      return "1hour";
    }

    case 90: {
      return "1day";
    }

    case 365: {
      return "1day";
    }

    default: {
      return "1week";
    }
  }
};

const addCurrentToHistory = ({ history, quote, interval }: Params) => {
  const lastHistoryPoint = history?.[history.length - 1];

  const dateString = roundCurrentByInterval({
    date: dateFromMillis({ date: quote?.timestamp })?.toFormat(
      "yyyy-MM-dd HH:mm:ss"
    ),
    interval: { value: 5, unit: "min" },
  });

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

  if (!current?.date || !lastHistoryPoint) {
    return history;
  }

  // current is past the last element in history
  if (current.date > lastHistoryPoint.date) {
    return [...history, current];
  }

  return history;

  // current is the same as the last element in history (this would only happen in the close of the market)

  // what happens at the open of the market?
  // history is blank but current is not
};

export default addCurrentToHistory;
