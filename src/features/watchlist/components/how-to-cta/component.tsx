import { memo } from "react";
import { Fade } from "@mui/material";
import { FADE_TIMEOUT } from "../styles";

import Box from "components/box/component";
import Typography from "components/typography";
import FavoriteBorder from "components/icons/favorite-border-icon";

interface Props {
  fadeIn?: boolean;
}

const WatchlistHowToCTA = ({ fadeIn }: Props) => {
  return (
    <Fade in={fadeIn} timeout={FADE_TIMEOUT}>
      <Box
        data-testid="cta-watchlist-guide"
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

        <FavoriteBorder />

        <Typography fontWeight={600} marginTop={1.5} variant={"body1"}>
          icon next to the stock name
        </Typography>
      </Box>
    </Fade>
  );
};

export default memo(WatchlistHowToCTA);
