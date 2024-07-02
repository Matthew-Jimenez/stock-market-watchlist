import { Typography as MUITypography, TypographyProps } from "@mui/material";

interface Props extends TypographyProps {}

const Typography = ({ children, ...props }: Props) => {
  return <MUITypography {...props}>{children}</MUITypography>;
};

export default Typography;
