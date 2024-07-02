import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import React from "react";
import { useCallback } from "react";

interface Props<T> {
  buttons: { label: string; value: T }[];
  onSelect?: (value: T) => void;
  selectedValue?: T;
}

const OutlinedButtonGroup = <T,>({
  buttons,
  onSelect,
  selectedValue,
}: Props<T>) => {
  const handleSelect = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      // get label of button
      const label = e.currentTarget.textContent;

      // find value of button
      const button = buttons.find((button) => button.label === label);

      // if button is found, call onSelect
      if (button && onSelect) {
        onSelect(button.value);
      }
    },
    [buttons, onSelect]
  );

  return (
    <ButtonGroup variant="outlined">
      {buttons.map((button, index) => (
        <Button
          data-testid={`button--${button.label}`}
          variant={selectedValue === button.value ? "contained" : "outlined"}
          disableElevation
          key={index}
          onClick={handleSelect}
        >
          {button.label}
        </Button>
      ))}
    </ButtonGroup>
  );
};

// Memoize the component
const MemoizedOutlinedButtonGroup = React.memo(OutlinedButtonGroup) as <T>(
  props: Props<T>
) => JSX.Element;

export default MemoizedOutlinedButtonGroup;
