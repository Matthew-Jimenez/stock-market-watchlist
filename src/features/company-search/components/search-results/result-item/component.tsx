import { Grid, ListItemButton } from "@mui/material";
import Typography from "components/typography";
import { memo, useCallback } from "react";
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
      <Grid
        container
        alignItems={CONTAINER_GRID.alignItems}
        spacing={CONTAINER_GRID.spacing}
      >
        <Grid item xs={4} md="auto">
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
