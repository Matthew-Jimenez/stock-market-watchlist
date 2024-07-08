import React from "react";

import Favorite from "components/icons/favorite-icon";
import FavoriteBorder from "components/icons/favorite-border-icon";
import IconButton from "components/icon-button/component";

interface Props {
  isActive?: boolean;
  onClick?: () => void;
}

const ToggleWatchlistItem = ({ onClick, isActive }: Props) => {
  return (
    <IconButton color="primary" onClick={onClick}>
      {isActive ? <Favorite /> : <FavoriteBorder />}
    </IconButton>
  );
};

export default React.memo(ToggleWatchlistItem);
