import { Favorite as MUIFavorite } from "@mui/icons-material";

import { memo } from "react";

interface Props {}

const FavoriteIcon = (props: Props) => {
  return <MUIFavorite {...props} />;
};

export default memo(FavoriteIcon);
