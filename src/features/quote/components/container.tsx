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

  // If priceOverride is provided, prefer comparePriceOverride over data?.previousClose
  // If priceOverride is not provided, use data?.previousClose as comparePrice
  const comparePrice =
    priceOverride !== undefined ? comparePriceOverride : data?.previousClose;

  return (
    <QuoteComponent
      price={priceOverride || data?.price}
      comparePrice={comparePrice}
    />
  );
};

export default React.memo(QuoteContainer);
