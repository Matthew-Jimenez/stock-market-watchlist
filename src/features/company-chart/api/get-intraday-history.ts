import { useQuery } from "@tanstack/react-query";
import MainAPI from "../../../api/api";

type Options = {
  symbol?: string;
  interval?: string;
  from?: string;
  refetchInterval?: number;
};

export const useIntradayHistory = ({
  symbol,
  refetchInterval,
  interval = "5",
  from = "2024-07-01",
}: Options) => {
  return useQuery({
    queryKey: ["symbol-history", interval, from, symbol],
    queryFn: () => {
      const api = new MainAPI();

      if (!symbol) throw new Error("Symbol is required");

      return api.getHistory({
        symbol,
        range: 1,
      });
    },
    enabled: !!symbol,
    refetchInterval,
  });
};
