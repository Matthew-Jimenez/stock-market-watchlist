import { memo } from "react";

import Box from "components/box/component";

import SearchInput from "./search-input/component";
import SearchResults from "./search-results/component";

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  results?: CompaniesSearchResponse[];
  onSelection?: (symbol: string) => void;
}

const CompanySearch = ({ value, onChange, results, onSelection }: Props) => {
  return (
    <Box position="relative">
      <SearchInput input={value} handleChange={onChange} />
      <SearchResults results={results} onSelection={onSelection} />
    </Box>
  );
};

export default memo(CompanySearch);
