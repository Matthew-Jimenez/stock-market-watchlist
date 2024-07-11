import { GridProps, Grid as MUIGrid } from "@mui/material";
import { Ref, forwardRef, memo } from "react";

interface Props extends GridProps {}

const Grid = forwardRef((props: Props, ref: Ref<HTMLDivElement>) => {
  return <MUIGrid {...props} ref={ref} />;
});

export default memo(Grid);
