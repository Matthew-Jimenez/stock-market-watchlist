import "react-loading-skeleton/dist/skeleton.css";

import React from "react";

import toDollarValue from "../../../utils/format/toDollarValue";
import displaySymbol from "../../../utils/format/displaySymbol";
import Skeleton from "react-loading-skeleton";
import { Typography } from "@mui/material";

interface Params {
  symbol?: string;
  price?: number;
}

const QuoteComponent = ({ symbol, price }: Params) => {
  return (
    <div>
      <Typography variant="h2" data-testid="copy--underlying-symbol">
        {displaySymbol(symbol) || (
          <Skeleton containerTestId="loading-skeleton--underlying-symbol" />
        )}
      </Typography>

      <Typography variant="h1" data-testid="copy--underlying-price">
        {toDollarValue(price) || (
          <Skeleton containerTestId="loading-skeleton--underlying-price" />
        )}
      </Typography>
    </div>
  );
};

export default React.memo(QuoteComponent);
