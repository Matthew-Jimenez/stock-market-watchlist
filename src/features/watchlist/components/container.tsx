import { List } from "@mui/material";
import { memo } from "react";
import { Link } from "react-router-dom";

import WatchlistListItem from "./list-item/container";
import { useGetWatchlist } from "../api/get-watchlist";

const WatchlistList = () => {
  const { data } = useGetWatchlist();

  return (
    <List>
      {data?.map((symbol) => (
        <Link to={`/?symbol=${symbol}`} style={style}>
          <WatchlistListItem key={symbol} symbol={symbol} />
        </Link>
      ))}
    </List>
  );
};

const style = { textDecoration: "none", color: "inherit" };

export default memo(WatchlistList);
