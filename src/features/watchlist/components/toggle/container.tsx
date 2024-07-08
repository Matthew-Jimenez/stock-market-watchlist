import React from "react";

import useAddToWatchlist from "features/watchlist/api/add-watchlist-item";
import useRemoveWatchlistItem from "features/watchlist/api/remove-watchlist-item";
import { useGetWatchlist } from "features/watchlist/api/get-watchlist";

import ToggleWatchlistItem from "./component";

interface Props {
  symbol?: string;
}

const ToggleWatchlistItemContainer = ({ symbol }: Props) => {
  const { mutate: addToWatchlist } = useAddToWatchlist();
  const { mutate: removeFromWatchlist } = useRemoveWatchlistItem();
  const { data } = useGetWatchlist();

  const isInWatchlist = data?.some((item) => item === symbol);

  const handleClick = () => {
    if (!symbol) {
      throw new Error("symbol not provided.");
    }

    if (isInWatchlist) {
      return removeFromWatchlist(symbol);
    }

    addToWatchlist(symbol);
  };

  return <ToggleWatchlistItem onClick={handleClick} isActive={isInWatchlist} />;
};

export default React.memo(ToggleWatchlistItemContainer);
