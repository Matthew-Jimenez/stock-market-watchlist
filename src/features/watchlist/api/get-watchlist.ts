import { useQuery } from "@tanstack/react-query";
import MainAPI from "../../../api/api";

export const useGetWatchlist = () => {
  return useQuery({
    queryKey: ["watchlist"],
    queryFn: () => {
      const api = new MainAPI();

      return api.getWatchlist();
    },
  });
};
