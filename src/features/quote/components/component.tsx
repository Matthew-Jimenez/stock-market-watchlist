import "react-loading-skeleton/dist/skeleton.css";

import { memo } from "react";
import Skeleton from "react-loading-skeleton";

import Box from "components/box/component";
import Typography from "components/typography";
import toDollarValue from "utils/format/toDollarValue";
import Decimal from "utils/math/decimal";

interface Params {
  price?: number;
  comparePrice?: number;
}

const QuoteComponent = ({ price, comparePrice }: Params) => {
  const change = new Decimal(price).minus(comparePrice);
  const changePercentage = change?.div(comparePrice)?.times(100);

  return (
    <Box display="flex" alignItems="baseline">
      <Typography
        marginRight={2}
        variant="h1"
        data-testid="copy--underlying-price"
      >
        {toDollarValue(price) || (
          <Skeleton
            containerTestId="loading-skeleton--underlying-price"
            width={200}
          />
        )}
      </Typography>

      <Typography variant="h5">
        {change?.toNearest(0.01)?.toFixed(2)} ({changePercentage?.toFixed(2)}%)
      </Typography>
    </Box>
  );
};

export default memo(QuoteComponent);
