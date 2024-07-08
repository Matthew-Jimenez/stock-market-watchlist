import { FavoriteBorder as MUIFavorite } from "@mui/icons-material";

import { memo } from "react";

interface Props {}

const FavoriteBorderIcon = (props: Props) => {
  return <MUIFavorite {...props} />;
};

export default memo(FavoriteBorderIcon);
