import { memo, useCallback } from "react";

import Typography from "components/typography";
import ListItemButton from "components/list/list-item-button/component";
import Grid from "components/grid/component";

import { COMPANY_NAME, CONTAINER_GRID } from "./styles";

interface Props {
  symbol?: string;
  companyName?: string;
  onSelection?: (symbol: string) => void;
}

const SearchResultItem = ({ symbol, companyName, onSelection }: Props) => {
  const handleSelection = useCallback(() => {
    if (!symbol) return;

    onSelection?.(symbol);
  }, [symbol, onSelection]);

  return (
    <ListItemButton divider onClick={handleSelection}>
      <Grid container alignItems={CONTAINER_GRID.alignItems}>
        <Grid item xs={4} md={1.5}>
          <Typography fontWeight={600} variant="h5">
            {symbol}
          </Typography>
        </Grid>

        <Grid item xs={12} md="auto">
          <Typography style={COMPANY_NAME} variant="body1">
            {companyName}
          </Typography>
        </Grid>
      </Grid>
    </ListItemButton>
  );
};

export default memo(SearchResultItem);
