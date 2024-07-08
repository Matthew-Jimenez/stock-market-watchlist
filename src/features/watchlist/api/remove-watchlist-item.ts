import { useMutation } from "@tanstack/react-query";

import MainAPI from "api/api";
import { queryClient } from "lib/react-query";

const useRemoveWatchlistItem = () => {
  return useMutation({
    mutationKey: ["watchlist"],
    mutationFn: (symbol: string) => {
      const api = new MainAPI();

      return api.removeWatchlistItem(symbol);
    },
    onMutate: async (symbol: string) => {
      // optimistic update
      queryClient.setQueryData<string[] | undefined>(["watchlist"], (data) => {
        if (!data) return [];

        return data.filter((s) => s !== symbol);
      });
    },
  });
};

export default useRemoveWatchlistItem;
