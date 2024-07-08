import { IconButton as MUIButton, IconButtonProps } from "@mui/material";

import { memo } from "react";

interface Props extends IconButtonProps {}

const IconButton = (props: Props) => {
  return <MUIButton {...props} />;
};

export default memo(IconButton);
