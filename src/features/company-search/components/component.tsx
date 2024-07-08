import { memo } from "react";
import SearchInput from "./search-input/component";
import SearchResults from "./search-results/component";
import { Box } from "@mui/material";

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
