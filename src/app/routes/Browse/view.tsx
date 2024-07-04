import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import WatchlistList from "features/watchlist/components/container";
import ToggleWatchlist from "features/watchlist/components/toggle/container";
import CompanyName from "features/company-name/components/container";

import Chart from "./containers/chart";
import Quote from "./containers/quote";
import {
  CHART_BOX_STYLES,
  COMPANY_NAME_CONTAINER_STYLES,
  VIEW_BOX_STYLES,
} from "./config/styles";

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
  }, []);

  return (
    <Box
      component="div"
      display={VIEW_BOX_STYLES.display}
      height={VIEW_BOX_STYLES.height}
      flexDirection={VIEW_BOX_STYLES.flexDirection}
    >
      <Box
        display={COMPANY_NAME_CONTAINER_STYLES.display}
        alignItems={COMPANY_NAME_CONTAINER_STYLES.alignItems}
      >
        <CompanyName symbol={symbol} />

        <ToggleWatchlist symbol={symbol} />
      </Box>

      <Quote symbol={symbol} />

      <Box
        ref={ref}
        flex={CHART_BOX_STYLES.flex}
        maxWidth={CHART_BOX_STYLES.maxWidth}
        maxHeight={CHART_BOX_STYLES.maxHeight}
      >
        {!!heightAndWidth && (
          <Chart
            symbol={symbol}
            height={heightAndWidth.height}
            width={heightAndWidth.width}
          />
        )}
      </Box>

      <Box maxWidth={CHART_BOX_STYLES.maxWidth}>
        <WatchlistList />
      </Box>
    </Box>
  );
};

export default BrowseView;
