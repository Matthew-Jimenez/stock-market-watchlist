import { Slide as MuiSlide, SlideProps } from "@mui/material";

import { memo } from "react";

const Slide = (props: SlideProps) => {
  return <MuiSlide {...props} />;
};

export default memo(Slide);
