import { useQuery } from "@tanstack/react-query";
import QuoteAPI from "./api";

type UseQuoteOptions = {
  symbol?: string;
  refetchInterval?: number;
};

export const useLastTrade = ({ symbol, refetchInterval }: UseQuoteOptions) => {
  return useQuery({
    queryKey: ["quotes", symbol],
    queryFn: () => {
      const api = new QuoteAPI();

      if (!symbol) throw new Error("Symbol is required");

      return api.getLastTrade(symbol);
    },
    enabled: !!symbol,
    refetchInterval,
  });
};
