import { ListItemButton, ListItemText } from "@mui/material";

interface Params {
  symbol?: string;
  price?: number;
}

const WatchlistListItem = ({ symbol, price }: Params) => {
  return (
    <ListItemButton>
      <ListItemText primary={symbol} />
      <ListItemText primary={price} />
    </ListItemButton>
  );
};

export default WatchlistListItem;
