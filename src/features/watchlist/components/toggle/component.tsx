import { IconButton } from "@mui/material";
import React from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

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
