import { Fade as MUIFade, FadeProps } from "@mui/material";

import { memo } from "react";

const Fade = (props: FadeProps) => {
  return <MUIFade {...props} />;
};

export default memo(Fade);
