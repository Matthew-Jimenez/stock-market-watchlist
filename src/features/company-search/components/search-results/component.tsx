import { memo } from "react";

import SearchResultItem from "./result-item/component";
import { Box, List } from "@mui/material";

interface Props {
  results?: CompaniesSearchResponse[];
  onSelection?: (symbol: string) => void;
}

const SearchResults = ({ results, onSelection }: Props) => {
  if (!results?.length) return null;

  return (
    <Box
      position="absolute"
      top={60}
      width="100%"
      maxWidth={800}
      zIndex={1000}
      bgcolor="#fff"
      component={List}
    >
      {results?.map((result) => (
        <SearchResultItem
          key={result.symbol}
          symbol={result.symbol}
          companyName={result.name}
          onSelection={onSelection}
        />
      ))}
    </Box>
  );
};

export default memo(SearchResults);
