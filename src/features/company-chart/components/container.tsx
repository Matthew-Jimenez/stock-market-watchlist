import { memo, useEffect, useMemo, useState } from "react";

import { HistoricalPrice } from "types/api";
import { useQuote } from "features/quote/api/get-quote";
import addCurrentToHistory from "utils/chart/addCurrentToHistory";
import { useIntradayHistory } from "api/hooks/get-intraday-history";
import deriveLineColor from "utils/chart/deriveLineColor";

import Chart from "./component";
import RangeSelector from "./range-selector/component";

interface Params {
  symbol?: string;
  onPointHovered?: (point: any) => void;
  height?: number;
  width?: number;
  onRangeChange?: (range?: number, data?: HistoricalPrice[]) => void;
}

const CompanyChartContainer = ({
  symbol = "",
  onPointHovered,
  height,
  width,
  onRangeChange,
}: Params) => {
  const [range, setRange] = useState<number>(1);

  const { data } = useIntradayHistory({ symbol, range });

  const { data: quote } = useQuote({ symbol });

  const history = addCurrentToHistory({ history: data, quote: quote, range });

  const comparePoit = range === 1 ? quote?.previousClose : data?.[0].close;
  const current = quote?.price;
  const lineColor = deriveLineColor(current, comparePoit);

  useEffect(() => {
    if (onRangeChange) {
      onRangeChange(range, data);
    }
  }, [data, range, onRangeChange]);

  const heightAndWidth = useMemo(() => {
    return { height, width };
  }, [height, width]);

  return (
    <div style={heightAndWidth}>
      <Chart
        onPointHovered={onPointHovered}
        data={history}
        range={range}
        height={height ? height - 40 : undefined}
        width={width}
        lineColor={lineColor}
      />

      <RangeSelector onSetRange={setRange} range={range} />
    </div>
  );
};

export default memo(CompanyChartContainer);
