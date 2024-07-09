import { memo } from "react";

import Typography from "components/typography";
import Grid from "components/grid/component";
import ListItemButton from "components/list/list-item-button/component";

import toDollarValue from "utils/format/toDollarValue";

interface Params {
  symbol?: string;
  price?: number;
}

const WatchlistListItem = ({ symbol, price }: Params) => {
  return (
    <ListItemButton>
      <Grid container={true}>
        <Grid item xs={4}>
          <Typography variant="h6">{symbol}</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">{toDollarValue(price)}</Typography>
        </Grid>
      </Grid>
    </ListItemButton>
  );
};

export default memo(WatchlistListItem);
