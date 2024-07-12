// APP_NOTE - consideration: we may need to move this file up to a common location
// that may look like src/api/hooks/quote/get-quote.ts or src/api/quote/get-quote.ts
import { useQuote } from "features/quote/api/get-quote";

import Component from "./component";

interface Props {
  symbol?: string;
}

const WatchlistListItem = ({ symbol }: Props) => {
  const { data } = useQuote({ symbol });

  return (
    <Component
      symbol={symbol}
      price={data?.price}
      comparePrice={data?.previousClose}
    />
  );
};

export default WatchlistListItem;
