import { memo } from "react";

import { useIntradayHistory } from "api/hooks/get-intraday-history";

import SparkChart from "./spark-chart.component";

interface Params {
  symbol?: string;
  height?: number;
  width?: number;
}

const SparkChartContainer = ({ symbol, height, width }: Params) => {
  const { data } = useIntradayHistory({ symbol });

  return <SparkChart data={data} height={height} width={width} />;
};

export default memo(SparkChartContainer);
