import { Box as MUIBox, BoxProps } from "@mui/material";
import { forwardRef, memo } from "react";

interface Props extends BoxProps {}

const Box = forwardRef((props: Props, ref) => {
  return <MUIBox {...props} ref={ref} />;
});

export default memo(Box);
