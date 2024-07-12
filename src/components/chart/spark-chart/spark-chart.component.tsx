import { VictoryAxis, VictoryChart, VictoryLine } from "victory";
import { useMemo } from "react";

import { HistoricalPrice } from "types/api";
import generateChartTicks from "utils/chart/generateChartTicks";

import { CHART_PADDING, axisStyles } from "./config";

interface Params {
  data?: HistoricalPrice[];
  range?: number;
  onPointHovered?: (point?: HistoricalPrice) => void;
  height?: number;
  width?: number;
  lineColor?: string;
}

const SparkChart = ({ data, range, height, width, lineColor }: Params) => {
  const _lastPointDate = data?.[data.length - 1]?.date;

  const ticks = useMemo(() => {
    return generateChartTicks(_lastPointDate, range);
  }, [range, _lastPointDate]);

  const styles = useMemo(() => {
    return {
      data: {
        stroke: lineColor,
      },
    };
  }, [lineColor]);

  return (
    <div>
      <VictoryChart
        width={width}
        height={height}
        padding={CHART_PADDING}
        data-testid="company-chart"
      >
        <VictoryAxis tickValues={ticks} style={axisStyles} />
        <VictoryAxis dependentAxis style={axisStyles} />

        {data?.length && (
          <VictoryLine
            style={styles}
            data-testid="company-chart-line"
            data={data}
            x="date"
            y="close"
          />
        )}
      </VictoryChart>
    </div>
  );
};

export default SparkChart;
