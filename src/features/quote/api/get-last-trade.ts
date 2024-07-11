import { useQuery } from "@tanstack/react-query";
import MainAPI from "../../../api/api";
import REFETCH_INTERVAL from "config/refetchIntervals";

type UseQuoteOptions = {
  symbol?: string;
  refetchInterval?: number;
};

export const useLastTrade = ({
  symbol,
  refetchInterval = REFETCH_INTERVAL.underlyingLastTrade,
}: UseQuoteOptions) => {
  return useQuery({
    queryKey: ["last-trade", symbol],
    queryFn: () => {
      const api = new MainAPI();

      if (!symbol) throw new Error("Symbol is required");

      return api.getLastTrade(symbol);
    },
    enabled: !!symbol,
    refetchInterval,
  });
};
