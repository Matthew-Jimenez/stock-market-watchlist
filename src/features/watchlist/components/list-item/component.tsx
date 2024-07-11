import { memo } from "react";

import Typography from "components/typography";
import Grid from "components/grid/component";
import ListItemButton from "components/list/list-item-button/component";

import toDollarValue from "utils/format/toDollarValue";
import Decimal from "utils/math/decimal";
import displaySymbol from "utils/format/displaySymbol";

interface Params {
  symbol?: string;
  price?: number;
  comparePrice?: number;
}

const WatchlistListItem = ({ symbol, price, comparePrice }: Params) => {
  const change = new Decimal(price).minus(comparePrice);
  const changePercentage = change?.div(comparePrice)?.times(100);

  return (
    <ListItemButton>
      <Grid container={true} alignItems={"center"}>
        <Grid item xs={3}>
          <Typography variant="h6" data-testid="copy--watchlist-symbol">
            {displaySymbol(symbol)}
          </Typography>
        </Grid>

        <Grid item xs={6}></Grid>

        <Grid item xs={3}>
          <Typography variant="body1" data-testid="copy--watchlist-price">
            {toDollarValue(price)}
          </Typography>
          <Typography variant="body1" data-testid="copy--watchlist-change">
            {change?.toNearest(0.01)?.toFixed(2)} (
            {changePercentage?.toFixed(2)}%)
          </Typography>
        </Grid>
      </Grid>
    </ListItemButton>
  );
};

export default memo(WatchlistListItem);
