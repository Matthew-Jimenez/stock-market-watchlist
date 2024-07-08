import { ListProps, List as MUIList } from "@mui/material";
import { memo } from "react";

interface Props extends ListProps {
  children?: React.ReactNode;
}

const List = ({ children, ...props }: Props) => {
  return <MUIList {...props}>{children}</MUIList>;
};

export default memo(List);
