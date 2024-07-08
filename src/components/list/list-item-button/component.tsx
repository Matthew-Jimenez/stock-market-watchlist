import { ListItemButton as MUIComponent } from "@mui/material";
import { memo } from "react";

interface Props {
  children?: React.ReactNode;
  divider?: boolean;
  onClick?: () => void;
}

const ListItemButton = ({ children, divider, onClick }: Props) => {
  return (
    <MUIComponent divider={divider} onClick={onClick}>
      {children}
    </MUIComponent>
  );
};

export default memo(ListItemButton);
