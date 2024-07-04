import { useQuote } from "../api/get-quote";
import QuoteComponent from "./component";
import React from "react";

interface Params {
  symbol?: string;
  priceOverride?: number;
}

const QuoteContainer = ({ symbol, priceOverride }: Params) => {
  const { data } = useQuote({ symbol, refetchInterval: 60000 * 5 });

  return <QuoteComponent price={priceOverride || data?.price} />;
};

export default React.memo(QuoteContainer);
