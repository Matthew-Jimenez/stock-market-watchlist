import { useQuery } from "@tanstack/react-query";
import MainAPI from "../../../api/api";

type Options = {
  symbol?: string;
  range?: number;
  refetchInterval?: number;
};

export const useIntradayHistory = ({
  symbol,
  refetchInterval,
  range = 1,
}: Options) => {
  return useQuery({
    queryKey: ["symbol-history", range, symbol],
    queryFn: () => {
      const api = new MainAPI();

      if (!symbol) throw new Error("Symbol is required");

      return api.getHistory({
        symbol,
        range,
      });
    },
    enabled: !!symbol,
    refetchInterval,
  });
};
