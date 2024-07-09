import Container from "components/container/component";
import Box from "components/box/component";
import Grid from "components/grid/component";

import WatchlistList from "features/watchlist/components/container";
import ToggleWatchlist from "features/watchlist/components/toggle/container";
import CompanyName from "features/company-name/components/container";
import CompanySearchContainer from "features/company-search/components/container";

import Chart from "./containers/chart";
import Quote from "./containers/quote";
import {
  COMPANY_NAME_CONTAINER_STYLES,
  CONTAINER_STYLES,
} from "./config/styles";
import Typography from "components/typography";
import useDimensions from "utils/layout/useDimensions";

interface Props {
  symbol?: string;
}

const BrowseView = ({ symbol }: Props) => {
  const { targetRef, dimensions } = useDimensions({ reloadDep: symbol });

  return (
    <Container style={CONTAINER_STYLES} maxWidth={"xl"}>
      <Box minHeight={"90%"} display={"flex"} flexDirection={"column"}>
        <Grid flex={1} container>
          <Grid item xs={12} lg={8} container direction={"column"}>
            <CompanySearchContainer />

            {!!symbol && (
              <>
                <Box style={COMPANY_NAME_CONTAINER_STYLES}>
                  <CompanyName symbol={symbol} />

                  <ToggleWatchlist symbol={symbol} />
                </Box>

                <Quote symbol={symbol} />

                <Box ref={targetRef} flex={1} maxHeight={600}>
                  {!!dimensions && (
                    <Chart
                      symbol={symbol}
                      height={dimensions.height}
                      width={dimensions.width}
                    />
                  )}
                </Box>
              </>
            )}
          </Grid>

          <Grid item xs={12} lg={4}>
            <Typography variant={"h6"}>Watchlist</Typography>

            <WatchlistList />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BrowseView;
