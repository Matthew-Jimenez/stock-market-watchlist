import { Container as MuiContainer } from "@mui/material";
import { ContainerProps } from "@mui/material";

import { memo } from "react";

interface Props extends ContainerProps {}

const Container = (props: Props) => {
  return <MuiContainer {...props} />;
};

export default memo(Container);
