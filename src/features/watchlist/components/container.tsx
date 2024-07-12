import { memo } from "react";
import { Link } from "react-router-dom";

import Box from "components/box/component";
import Slide from "components/transitions/Slide";

import List from "./list/watchlist-list.component";
import WatchlistHowToCTA from "./how-to-cta/component";
import WatchlistListItem from "./list-item/container";
import { SLIDE_TIMEOUT } from "./styles";

import { useGetWatchlist } from "../api/get-watchlist";

const WatchlistList = () => {
  const { data, isLoading } = useGetWatchlist();

  if (!data?.length)
    return <WatchlistHowToCTA fadeIn={!data?.length && !isLoading} />;

  return (
    <Box overflow={"hidden"}>
      <Slide in={!!data?.length} direction="left" timeout={SLIDE_TIMEOUT}>
        <Box>
          <List>
            {data?.map((symbol) => (
              <Link key={symbol} to={`/?symbol=${symbol}`} style={style}>
                <WatchlistListItem symbol={symbol} />
              </Link>
            ))}
          </List>
        </Box>
      </Slide>
    </Box>
  );
};

const style = { textDecoration: "none", color: "inherit" };

export default memo(WatchlistList);
