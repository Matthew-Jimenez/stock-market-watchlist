import { ListItemText } from "@mui/material";
import ListItemButton from "components/list/list-item-button/component";

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
