import { VictoryLabel, VictoryTooltipProps } from "victory";
import { VoronoiHistoricalPrice } from "../../types/VoronoiHistoricalPrice";
import { CHART_PADDING } from "../config";
import dateFromFormat from "../../../../utils/dates/dateFromFormat";

const HoverLabel = (props: VictoryTooltipProps) => {
  const { datum, x, y, height = 40 } = props;

  const { date } = datum as VoronoiHistoricalPrice;

  return (
    <>
      <VictoryLabel
        constrainToVisibleArea={true}
        {...props}
        y={20}
        text={dateFromFormat({ date, format: "yyyy-MM-dd HH:mm:ss" })?.toFormat(
          "MMM dd h:mma"
        )}
        dx={-34}
      />

      <line
        x1={x}
        x2={x}
        y1={CHART_PADDING.top}
        y2={height - CHART_PADDING.top}
        stroke="lightgrey"
        strokeWidth={1}
      />

      <circle
        r={2}
        fill="white"
        stroke="#000"
        strokeWidth={1}
        cx={props.x}
        cy={y}
      />
    </>
  );
};

export default HoverLabel;
