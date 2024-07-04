import { useMutation } from "@tanstack/react-query";

import MainAPI from "../../../api/api";
import { queryClient } from "../../../lib/react-query";

const useAddToWatchlist = () => {
  return useMutation({
    mutationKey: ["watchlist"],
    mutationFn: (symbol: string) => {
      const api = new MainAPI();

      return api.addWatchlistItem(symbol);
    },
    onMutate: async (symbol: string) => {
      // optimistic update
      queryClient.setQueryData<string[] | undefined>(["watchlist"], (data) => {
        if (!data) return [symbol];

        return [...data, symbol];
      });
    },
    onError: (error, symbol) => {
      queryClient.setQueryData<string[] | undefined>(["watchlist"], (data) => {
        if (!data) return [];

        return data.filter((s) => s !== symbol);
      });

      queryClient.refetchQueries({ queryKey: ["watchlist"] });
    },
  });
};

export default useAddToWatchlist;
