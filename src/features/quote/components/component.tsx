import "react-loading-skeleton/dist/skeleton.css";

import React from "react";

import toDollarValue from "../../../utils/format/toDollarValue";
import displaySymbol from "../../../utils/format/displaySymbol";
import Skeleton from "react-loading-skeleton";

interface Params {
  symbol?: string;
  price?: number;
}

const QuoteComponent = ({ symbol, price }: Params) => {
  return (
    <div>
      <h2 data-testid="copy--underlying-symbol">
        {displaySymbol(symbol) || (
          <Skeleton containerTestId="loading-skeleton--underlying-symbol" />
        )}
      </h2>

      <h3 data-testid="copy--underlying-price">
        {toDollarValue(price) || (
          <Skeleton containerTestId="loading-skeleton--underlying-price" />
        )}
      </h3>
    </div>
  );
};

export default React.memo(QuoteComponent);
