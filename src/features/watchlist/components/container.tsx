import { memo } from "react";
import { Link } from "react-router-dom";

import List from "components/list/component";

import WatchlistListItem from "./list-item/container";
import { useGetWatchlist } from "../api/get-watchlist";
import { Box, Fade, Slide, Typography } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import { FADE_TIMEOUT, SLIDE_TIMEOUT } from "./styles";

const WatchlistList = () => {
  const { data } = useGetWatchlist();

  if (!data?.length)
    return (
      <Fade in={!data?.length} timeout={FADE_TIMEOUT}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection="column"
          border={".5px solid lightgrey"}
          borderRadius={2}
          bgcolor={"#fafafa"}
          py={6}
        >
          <Typography fontWeight={600} marginBottom={2} variant={"body1"}>
            Add a stock by hitting the
          </Typography>

          <FavoriteBorder color="primary" fontSize="large" />

          <Typography fontWeight={600} marginTop={1.5} variant={"body1"}>
            icon next to the stock name
          </Typography>
        </Box>
      </Fade>
    );

  return (
    <Box overflow={"hidden"}>
      <Slide in={!!data?.length} direction="left" timeout={SLIDE_TIMEOUT}>
        <Box>
          <List>
            {data?.map((symbol) => (
              <Link to={`/?symbol=${symbol}`} style={style}>
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
