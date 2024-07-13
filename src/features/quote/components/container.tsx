import dateFromMillis from "utils/dates/dateFromMillis";
import { useQuote } from "../api/get-quote";
import QuoteComponent from "./component";
import React from "react";
import dateFromFormat from "utils/dates/dateFromFormat";

interface Params {
  symbol?: string;
  priceOverride?: number;
  comparePriceOverride?: number;
  comparePriceDate?: string;
}

const QuoteContainer = ({
  symbol,
  priceOverride,
  comparePriceOverride,
  comparePriceDate,
}: Params) => {
  const { data } = useQuote({ symbol });

  // the compare price is the earliest price available in history,
  // we use the previous close if there is no compare price
  const comparePrice = comparePriceOverride || data?.previousClose;

  const currentDate = dateFromMillis({ date: data?.timestamp });
  const compareDate = dateFromFormat({
    date: comparePriceDate,
    format: "yyyy-MM-dd HH:mm:ss",
  });

  const diffInHours =
    currentDate && compareDate
      ? currentDate.diff(compareDate, "hours").hours
      : undefined;

  return (
    <QuoteComponent
      price={priceOverride || data?.price}
      comparePrice={comparePrice}
      diffInHours={!priceOverride ? diffInHours : undefined}
    />
  );
};

export default React.memo(QuoteContainer);
