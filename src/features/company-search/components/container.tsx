import { useState, useCallback } from "react";
import CompanySearch from "./component";
import { useNavigate } from "react-router-dom";
import { useSearchCompanies } from "../api/search-companies";

interface Props {
  initialValue?: string;
}

const CompanySearchContainer = ({ initialValue = "" }: Props) => {
  const [value, setValue] = useState(initialValue);

  const { data = [] } = useSearchCompanies({ searchValue: value });

  const navigate = useNavigate();

  const handleSelection = useCallback(
    (symbol: string) => {
      setValue("");
      navigate(`/?symbol=${symbol.toUpperCase()}`);
    },
    [navigate]
  );

  return (
    <CompanySearch
      value={value}
      onChange={setValue}
      results={data}
      onSelection={handleSelection}
    />
  );
};

export default CompanySearchContainer;
