import { memo, useEffect, useState } from "react";

import { HistoricalPrice } from "types/api";
import { useQuote } from "features/quote/api/get-quote";
import dateFromMillis from "utils/dates/dateFromMillis";
import addCurrentToHistory from "utils/chart/addCurrentToHistory";
import { useIntradayHistory } from "api/hooks/get-intraday-history";

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

  const quotePoint = quote?.price
    ? {
        date: dateFromMillis({ date: quote.timestamp }),
        close: quote.price,
      }
    : undefined;

  const history = addCurrentToHistory({ history: data, quote: quote });

  useEffect(() => {
    if (onRangeChange) {
      onRangeChange(range, data);
    }
  }, [data, range, onRangeChange]);

  return (
    <div style={{ height, width }}>
      <h5>{history?.[history.length - 1].date}</h5>
      <p>{quotePoint?.date?.toFormat("MMM dd h:mm:ss z")}</p>
      <p>{quotePoint?.close.toFixed(2)}</p>
      <Chart
        onPointHovered={onPointHovered}
        data={data}
        range={range}
        height={height ? height - 40 : undefined}
        width={width}
      />

      <div style={{ height: 40, overflow: "hidden" }}>
        <RangeSelector onSetRange={setRange} range={range} />
      </div>
    </div>
  );
};

export default memo(CompanyChartContainer);
