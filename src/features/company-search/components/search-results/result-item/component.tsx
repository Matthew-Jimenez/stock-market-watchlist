import { Grid, ListItemButton } from "@mui/material";
import Typography from "components/typography";
import { memo, useCallback } from "react";

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
      <Grid container alignItems={"center"}>
        <Grid item xs={2}>
          <Typography variant="h5">{symbol}</Typography>
        </Grid>

        <Grid item>
          <Typography variant="body1">{companyName}</Typography>
        </Grid>
      </Grid>
    </ListItemButton>
  );
};

export default memo(SearchResultItem);
