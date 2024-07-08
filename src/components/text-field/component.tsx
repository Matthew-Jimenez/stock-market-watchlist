import { TextField as MUITextField, TextFieldProps } from "@mui/material";

import { memo } from "react";

const TextField = (props: TextFieldProps) => {
  return <MUITextField {...props} />;
};

export default memo(TextField);
