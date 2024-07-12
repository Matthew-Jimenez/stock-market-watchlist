import { memo } from "react";

import { useIntradayHistory } from "api/hooks/get-intraday-history";

import SparkChart from "./spark-chart.component";
import { useQuote } from "features/quote/api/get-quote";
import addCurrentToHistory from "utils/chart/addCurrentToHistory";
import deriveLineColor from "utils/chart/deriveLineColor";

interface Params {
  symbol?: string;
  height?: number;
  width?: number;
}

const SparkChartContainer = ({ symbol, height, width }: Params) => {
  const { data } = useIntradayHistory({ symbol, range: 1 });
  const { data: quote } = useQuote({ symbol });

  const history = addCurrentToHistory({
    history: data,
    quote: quote,
    range: 1,
  });

  const comparePoit = quote?.previousClose;
  const current = quote?.price;
  const lineColor = deriveLineColor(current, comparePoit);

  return (
    <SparkChart
      data={history}
      height={height}
      width={width}
      lineColor={lineColor}
    />
  );
};

export default memo(SparkChartContainer);
