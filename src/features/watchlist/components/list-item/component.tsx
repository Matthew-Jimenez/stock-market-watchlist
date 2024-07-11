import { memo } from "react";

import Typography from "components/typography";
import Grid from "components/grid/component";
import ListItemButton from "components/list/list-item-button/component";
import Box from "components/box/component";

import toDollarValue from "utils/format/toDollarValue";
import Decimal from "utils/math/decimal";
import displaySymbol from "utils/format/displaySymbol";
import SparkChartContainer from "components/chart/spark-chart/spark-chart.container";
import useDimensions from "utils/layout/useDimensions";
import { COLORS } from "lib/material-ui";

interface Params {
  symbol?: string;
  price?: number;
  comparePrice?: number;
}

const WatchlistListItem = ({ symbol, price, comparePrice }: Params) => {
  const change = new Decimal(price).minus(comparePrice);
  const changePercentage = change?.div(comparePrice)?.times(100);

  const { targetRef, dimensions } = useDimensions({
    reloadDep: symbol,
  });

  return (
    <ListItemButton>
      <Grid
        container={true}
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Grid item xs={1.5}>
          <Typography variant="h6" data-testid="copy--watchlist-symbol">
            {displaySymbol(symbol)}
          </Typography>
        </Grid>

        <Grid item xs={6} ref={targetRef} alignSelf="stretch">
          <Box height={dimensions?.height} width={dimensions?.width}>
            {!!dimensions?.height && (
              <SparkChartContainer
                symbol={symbol}
                height={dimensions.height}
                width={dimensions.width}
              />
            )}
          </Box>
        </Grid>

        <Grid item xs={2}>
          <Typography
            textAlign="center"
            variant="body1"
            data-testid="copy--watchlist-price"
          >
            {toDollarValue(price)}
          </Typography>

          <Typography
            textAlign="center"
            variant="body1"
            data-testid="copy--watchlist-change"
            color={change?.isPositive ? COLORS.chartGreen : COLORS.chartRed}
          >
            {changePercentage?.toFixed(2)}%
          </Typography>
        </Grid>
      </Grid>
    </ListItemButton>
  );
};

export default memo(WatchlistListItem);
