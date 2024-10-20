import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryVoronoiContainer,
} from "victory";
import { HistoricalPrice } from "../../../types/api";
import { useCallback, useMemo, useState } from "react";
import generateChartTicks from "../../../utils/chart/generateChartTicks";
import { VoronoiHistoricalPrice } from "../types/VoronoiHistoricalPrice";
import HoverLabel from "./hover-label/component";
import { AXIS_STYLES, CHART_LABELS, CHART_PADDING, tickFormat } from "./config";

interface Params {
  data?: HistoricalPrice[];
  range?: number;
  onPointHovered?: (point?: HistoricalPrice) => void;
  height?: number;
  width?: number;
  lineColor?: string;
}

const CompanyChart = ({
  data,
  range,
  onPointHovered,
  height,
  width,
  lineColor,
}: Params) => {
  const _lastPointDate = data?.[data.length - 1]?.date;

  const [showLabel, setShowLabel] = useState(false);

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

  const handleTouchStart = useCallback(() => {
    setShowLabel(true);
  }, []);

  const handleDeactivated = useCallback(() => {
    onPointHovered?.();
    setShowLabel(false);
  }, [onPointHovered, setShowLabel]);

  const styles = useMemo(() => {
    return {
      data: {
        stroke: lineColor,
        strokeWidth: 2,
      },
    };
  }, [lineColor]);

  return (
    <div
      onTouchStart={handleTouchStart}
      onMouseOver={handleTouchStart}
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
            responsive={false}
            onActivated={handlePointHovered}
            labelComponent={showLabel ? <HoverLabel range={range} /> : <></>}
            labels={CHART_LABELS}
            voronoiDimension="x"
          />
        }
      >
        <VictoryAxis
          tickValues={ticks}
          tickFormat={tickFormat}
          style={AXIS_STYLES}
        />

        <VictoryAxis dependentAxis style={AXIS_STYLES} />

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

export default CompanyChart;
