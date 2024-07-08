import { GridProps, Grid as MUIGrid } from "@mui/material";
import { memo } from "react";

interface Props extends GridProps {}

const Grid = (props: Props) => {
  return <MUIGrid {...props} />;
};

export default memo(Grid);
