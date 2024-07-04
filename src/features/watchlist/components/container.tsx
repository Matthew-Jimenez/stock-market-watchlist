import { List } from "@mui/material";
import { useGetWatchlist } from "../api/get-watchlist";
import WatchlistListItem from "./list-item/container";
import { Link } from "react-router-dom";
import { queryClient } from "../../../lib/react-query";
import MainAPI from "../../../api/api";

const WatchlistList = () => {
  const { data } = useGetWatchlist();

  return (
    <List>
      {data?.map((symbol) => (
        <Link
          to={`/?symbol=${symbol}`}
          style={style}
          onMouseOver={() => {
            // check if the query is already cached
            if (queryClient.getQueryData(["company-info", symbol])) return;

            queryClient.prefetchQuery({
              queryKey: ["company-info", symbol],
              queryFn: async () => {
                const res = await new MainAPI().getCompany(symbol);

                return res?.[0];
              },
            });
          }}
        >
          <WatchlistListItem key={symbol} symbol={symbol} />
        </Link>
      ))}
    </List>
  );
};

const style = { textDecoration: "none", color: "inherit" };

export default WatchlistList;
