import { useQuery } from "@tanstack/react-query";
import APIClient from "../../../api/clients/api";

type Options = {
  symbol?: string;
};

export const useCompany = ({ symbol }: Options) => {
  return useQuery({
    queryKey: ["company-info", symbol],
    queryFn: async () => {
      const api = new APIClient();

      if (!symbol) throw new Error("Symbol is required");

      const res = await api.getCompany(symbol);

      return res?.[0];
    },
    enabled: !!symbol,
  });
};
