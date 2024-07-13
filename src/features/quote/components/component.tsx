import "react-loading-skeleton/dist/skeleton.css";

import { memo } from "react";
import Skeleton from "react-loading-skeleton";

import Box from "components/box/component";
import Typography from "components/typography";
import toDollarValue from "utils/format/toDollarValue";
import Decimal from "utils/math/decimal";
import { COLORS } from "lib/material-ui";
import howLongAgo from "utils/dates/howLongAgo";

interface Params {
  price?: number;
  comparePrice?: number;
  diffInHours?: number;
}

const QuoteComponent = ({ price, comparePrice, diffInHours }: Params) => {
  const change = new Decimal(price).minus(comparePrice);
  const changePercentage = change?.div(comparePrice)?.times(100);

  return (
    <Box display="flex" alignItems="baseline">
      <Typography
        marginRight={1.5}
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

      <Box display="flex" alignItems="center">
        <Typography
          variant="h5"
          data-testid="copy--underlying-change"
          color={change?.isPositive ? COLORS.chartGreen : COLORS.chartRed}
          mr={1}
        >
          {change?.toNearest(0.01)?.toFixed(2)} ({changePercentage?.toFixed(2)}
          %)
        </Typography>

        <Typography
          color={change?.isPositive ? COLORS.chartGreen : COLORS.chartRed}
        >
          {howLongAgo(diffInHours)}
        </Typography>
      </Box>
    </Box>
  );
};

export default memo(QuoteComponent);
