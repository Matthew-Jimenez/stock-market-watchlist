import { useQuery } from "@tanstack/react-query";
import MainAPI from "../../../api/api";
import REFETCH_INTERVAL from "config/refetchIntervals";

type UseQuoteOptions = {
  symbol?: string;
};

export const useQuote = ({ symbol }: UseQuoteOptions) => {
  return useQuery({
    queryKey: ["quote", symbol],
    queryFn: async () => {
      const api = new MainAPI();

      if (!symbol) throw new Error("Symbol is required");

      const res = await api.getQuote(symbol);

      return res?.[0];
    },
    enabled: !!symbol,
    refetchInterval: REFETCH_INTERVAL.underlyingQuote,
  });
};
