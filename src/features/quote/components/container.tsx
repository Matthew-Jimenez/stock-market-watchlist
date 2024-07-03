import { useLastTrade } from "../api/get-last-trade";
import QuoteComponent from "./component";
import React from "react";

interface Params {
  symbol?: string;
  priceOverride?: number;
}

const QuoteContainer = ({ symbol, priceOverride }: Params) => {
  const { data } = useLastTrade({ symbol, refetchInterval: 60000 * 5 });

  return <QuoteComponent price={priceOverride || data?.price} />;
};

export default React.memo(QuoteContainer);
