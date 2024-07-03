import "react-loading-skeleton/dist/skeleton.css";

import React from "react";
import Skeleton from "react-loading-skeleton";

import toDollarValue from "../../../utils/format/toDollarValue";
import Typography from "../../../components/typography";

interface Params {
  price?: number;
}

const QuoteComponent = ({ price }: Params) => {
  return (
    <div>
      <Typography variant="h1" data-testid="copy--underlying-price">
        {toDollarValue(price) || (
          <Skeleton
            containerTestId="loading-skeleton--underlying-price"
            width={200}
          />
        )}
      </Typography>
    </div>
  );
};

export default React.memo(QuoteComponent);
