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

  return (
    <QuoteComponent
      price={priceOverride || data?.price}
      comparePrice={comparePriceOverride || data?.previousClose}
    />
  );
};

export default React.memo(QuoteContainer);
