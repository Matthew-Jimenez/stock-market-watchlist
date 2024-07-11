import { useQuery } from "@tanstack/react-query";
import APIClient from "../../../api/clients/api";
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
      const api = new APIClient();

      if (!symbol) throw new Error("Symbol is required");

      return api.getLastTrade(symbol);
    },
    enabled: !!symbol,
    refetchInterval,
  });
};
