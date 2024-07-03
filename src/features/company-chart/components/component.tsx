import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryVoronoiContainer,
} from "victory";
import { HistoricalPrice } from "../../../types/api";
import { useCallback, useMemo } from "react";
import generateChartTicks from "../utils/generateChartTicks";
import { VoronoiHistoricalPrice } from "../types/VoronoiHistoricalPrice";
import HoverLabel from "./hover-label/component";
import { CHART_PADDING, tickFormat } from "./config";

interface Params {
  data?: HistoricalPrice[];
  range?: number;
  onPointHovered?: (point?: HistoricalPrice) => void;
  height?: number;
  width?: number;
}

const CompanyChart = ({
  data,
  range,
  onPointHovered,
  height,
  width,
}: Params) => {
  const _lastPointDate = data?.[data.length - 1]?.date;

  const ticks = useMemo(() => {
    return generateChartTicks(_lastPointDate, range);
  }, [range, _lastPointDate]);

  const handlePointHovered = useCallback(
    (points?: VoronoiHistoricalPrice[]) => {
      try {
        const point = points?.[0];

        onPointHovered?.(point);
      } catch (error) {
        console.error(error);
      }
    },
    [onPointHovered]
  );

  const handleDeactivated = useCallback(() => {
    onPointHovered?.();
  }, [onPointHovered]);

  return (
    <div
      onTouchCancel={handleDeactivated}
      onMouseLeave={handleDeactivated}
      onTouchEnd={handleDeactivated}
    >
      <VictoryChart
        width={width}
        height={height}
        padding={CHART_PADDING}
        data-testid="company-chart"
        containerComponent={
          <VictoryVoronoiContainer
            responsive={true}
            onActivated={handlePointHovered}
            labelComponent={<HoverLabel />}
            labels={({ datum }) => `Close: ${datum.close}\nDate: ${datum.date}`}
            voronoiDimension="x"
          />
        }
      >
        <VictoryAxis tickValues={ticks} tickFormat={tickFormat} />
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
    </div>
  );
};

export default CompanyChart;
