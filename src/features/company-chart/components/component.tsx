import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryVoronoiContainer,
} from "victory";
import { HistoricalPrice } from "../../../types/api";
import { useMemo } from "react";
import generateChartTicks from "../utils/generateChartTicks";

interface Params {
  data?: HistoricalPrice[];
  range?: number;
}

const CompanyChart = ({ data, range }: Params) => {
  const _lastPointDate = data?.[data.length - 1]?.date;

  const ticks = useMemo(() => {
    return generateChartTicks(_lastPointDate, range);
  }, [range, _lastPointDate]);

  return (
    <VictoryChart
      data-testid="company-chart"
      containerComponent={
        <VictoryVoronoiContainer
          labels={({ datum }) => `Close: ${datum.close}\nDate: ${datum.date}`}
          voronoiDimension="x"
        />
      }
    >
      <VictoryAxis tickValues={ticks} />
      <VictoryAxis dependentAxis />

      {data?.length && (
        <VictoryLine
          data-testid="company-chart-line"
          data={data}
          x="date"
          y="close"
        />
      )}
    </VictoryChart>
  );
};

export default CompanyChart;
