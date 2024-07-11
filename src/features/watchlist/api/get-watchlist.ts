import { useQuery } from "@tanstack/react-query";

import APIClient from "api/clients/api";

export const useGetWatchlist = () => {
  return useQuery({
    queryKey: ["watchlist"],
    queryFn: () => {
      const api = new APIClient();

      return api.getWatchlist();
    },
  });
};
