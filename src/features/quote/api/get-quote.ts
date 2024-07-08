import { useQuery } from "@tanstack/react-query";
import MainAPI from "../../../api/api";

type UseQuoteOptions = {
  symbol?: string;
  refetchInterval?: number;
};

export const useQuote = ({ symbol, refetchInterval }: UseQuoteOptions) => {
  return useQuery({
    queryKey: ["quote", symbol],
    queryFn: async () => {
      const api = new MainAPI();

      if (!symbol) throw new Error("Symbol is required");

      const res = await api.getQuote(symbol);

      return res?.[0];
    },
    enabled: !!symbol,
    refetchInterval: 1000,
  });
};
