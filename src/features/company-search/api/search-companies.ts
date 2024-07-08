import { keepPreviousData, useQuery } from "@tanstack/react-query";
import companiesIndex from "../config";

type UseQuoteOptions = {
  searchValue?: string;
};

export const useSearchCompanies = ({ searchValue }: UseQuoteOptions) => {
  return useQuery<CompaniesSearchResponse[]>({
    queryKey: ["companies", searchValue],
    placeholderData: (d, a) => {
      console.log(d, a);
      if (a?.queryKey[0] === "") {
        return [];
      }

      return keepPreviousData(d);
    },
    queryFn: async () => {
      if (!searchValue) return [];

      const response = await companiesIndex.search<CompaniesSearchResponse>(
        searchValue,
        {
          hitsPerPage: 5,
        }
      );

      const companies = response.hits.map((hit) => {
        return {
          objectID: hit.objectID,
          name: hit.name,
          symbol: hit.symbol,
        };
      });

      return companies;
    },
    notifyOnChangeProps: ["data"],
  });
};
