import { useQuote } from "../api/get-quote";
import QuoteComponent from "./component";
import React from "react";

interface Params {
  symbol?: string;
  priceOverride?: number;
  comparePriceOverride?: number;
}

const QuoteContainer = ({
  symbol,
  priceOverride,
  comparePriceOverride,
}: Params) => {
  const { data } = useQuote({ symbol });

  // If priceOverride is not provided, use data?.previousClose as comparePrice
  // If priceOverride is provided, prefer comparePriceOverride over data?.previousClose,
  // but fallback to data?.previousClose if comparePriceOverride is not provided
  const comparePrice =
    priceOverride !== undefined
      ? comparePriceOverride || data?.previousClose
      : data?.previousClose;

  return (
    <QuoteComponent
      price={priceOverride || data?.price}
      comparePrice={comparePrice}
    />
  );
};

export default React.memo(QuoteContainer);
