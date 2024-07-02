import Button, { ButtonProps } from "@mui/material/Button";

interface Props extends ButtonProps {}

const OutlinedButton = (props: Props) => {
  return <Button {...props} variant="outlined" />;
};

export default OutlinedButton;
