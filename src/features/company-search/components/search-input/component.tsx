import { memo, useCallback } from "react";

import TextField from "components/text-field/component";

interface Params {
  input?: string;
  handleChange?: (value: string) => void;
}

const SearchInput = ({ input = "", handleChange }: Params) => {
  const _handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleChange?.(event.target.value);
    },
    [handleChange]
  );

  return (
    <TextField
      placeholder="Enter a company name or symbol"
      autoComplete="off"
      label="Search by company"
      variant="outlined"
      onChange={_handleChange}
      value={input}
    />
  );
};

export default memo(SearchInput);
