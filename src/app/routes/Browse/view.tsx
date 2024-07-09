import { useEffect, useRef, useState } from "react";

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

interface Props {
  symbol?: string;
}

const BrowseView = ({ symbol }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const [heightAndWidth, setHeightAndWidth] = useState<
    | {
        height: number;
        width: number;
      }
    | undefined
  >(undefined);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries.length === 0) return;

      const entry = entries[0];

      setHeightAndWidth({
        height: entry.contentRect.height,
        width: entry.contentRect.width,
      });
    });

    const currentRef = ref.current;

    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, [symbol]);

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

                <Box ref={ref} flex={1} maxHeight={600}>
                  {!!heightAndWidth && (
                    <Chart
                      symbol={symbol}
                      height={heightAndWidth.height}
                      width={heightAndWidth.width}
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
