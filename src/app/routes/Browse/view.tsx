import Container from "components/container/component";
import Box from "components/box/component";
import Grid from "components/grid/component";
import Typography from "components/typography";
import AnimatedDiv from "components/box/animated-width";
import Collapse from "components/transitions/Collapse";
import Fade from "components/transitions/Fade";

import WatchlistList from "features/watchlist/components/container";
import ToggleWatchlist from "features/watchlist/components/toggle/container";
import CompanyName from "features/company-name/components/container";
import CompanySearchContainer from "features/company-search/components/container";

import Chart from "./containers/chart";
import Quote from "./containers/quote";
import {
  COMPANY_NAME_CONTAINER_STYLES,
  CONTAINER_STYLES,
  FADE_TIMEOUT,
  GRID0,
  GRID1,
  GRID2_BORDER,
  WATCHLIST_CONTAINER,
  WATCHLIST_HEADER_STYLES,
} from "./config/styles";

import useDimensions from "utils/layout/useDimensions";

interface Props {
  symbol?: string;
}

const BrowseView = ({ symbol }: Props) => {
  const { targetRef, dimensions } = useDimensions({ reloadDep: symbol });

  return (
    <Container style={CONTAINER_STYLES} maxWidth={"xl"}>
      <Box
        minHeight={"90%"}
        display={"flex"}
        flexDirection={"column"}
        maxHeight={"100vh"}
      >
        <Grid flex={1} container wrap="nowrap" direction={GRID0.direction}>
          <Grid
            maxHeight={GRID1.maxHeight}
            item
            xs={6}
            lg={8}
            container
            direction="column"
          >
            <AnimatedDiv fullWidth={!symbol?.length} width="min(90vw, 600px)">
              <Collapse
                in={!symbol?.length}
                timeout={1000}
                unmountOnExit
                mountOnEnter
              >
                <Box marginBottom={2}>
                  <Typography
                    data-testid={"copy-search-header"}
                    textOverflow={"hidden"}
                    noWrap
                    variant={"h1"}
                  >
                    Search for a company
                  </Typography>
                </Box>
              </Collapse>

              <CompanySearchContainer />
            </AnimatedDiv>

            <Fade in={!!symbol?.length} timeout={FADE_TIMEOUT}>
              <Box style={COMPANY_NAME_CONTAINER_STYLES}>
                <CompanyName symbol={symbol} />

                <ToggleWatchlist symbol={symbol} />
              </Box>
            </Fade>

            <Fade in={!!symbol?.length} timeout={FADE_TIMEOUT}>
              <Box>
                <Quote symbol={symbol} />
              </Box>
            </Fade>

            <Fade in={!!symbol?.length} timeout={FADE_TIMEOUT}>
              <Box ref={targetRef} flex={1} maxHeight={600} minHeight={300}>
                {!!dimensions && (
                  <Chart
                    symbol={symbol}
                    height={dimensions.height}
                    width={dimensions.width}
                  />
                )}
              </Box>
            </Fade>
          </Grid>

          <Grid item xs={6} lg={4}>
            <Typography sx={WATCHLIST_HEADER_STYLES} variant={"h6"}>
              Watchlist
            </Typography>

            <Box border={GRID2_BORDER} borderRadius={2} pt={0}>
              <Box
                overflow={WATCHLIST_CONTAINER.overflow}
                maxHeight={WATCHLIST_CONTAINER.maxHeight}
                style={WATCHLIST_CONTAINER.style}
              >
                <WatchlistList />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BrowseView;
