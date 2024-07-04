import React from "react";
import useAddToWatchlist from "../../api/add-watchlist-item";
import { useGetWatchlist } from "../../api/get-watchlist";
import useRemoveWatchlistItem from "../../api/remove-watchlist-item";
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
