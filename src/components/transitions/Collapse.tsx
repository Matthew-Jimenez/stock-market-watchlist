import { CollapseProps, Collapse as MUICollapse } from "@mui/material";
import { memo } from "react";

const Collapse = (props: CollapseProps) => {
  return <MUICollapse {...props} />;
};

export default memo(Collapse);
