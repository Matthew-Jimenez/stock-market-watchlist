import { useQuery } from "@tanstack/react-query";
import MainAPI from "../../../api/api";

type Options = {
  symbol?: string;
};

export const useCompany = ({ symbol }: Options) => {
  return useQuery({
    queryKey: ["company-info", symbol],
    queryFn: async () => {
      const api = new MainAPI();

      if (!symbol) throw new Error("Symbol is required");

      const res = await api.getCompany(symbol);

      return res?.[0];
    },
    enabled: !!symbol,
  });
};
