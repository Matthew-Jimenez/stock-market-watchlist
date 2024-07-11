import { useEffect, useState } from "react";
import { useIntradayHistory } from "../../../api/hooks/get-intraday-history";
import Chart from "./component";
import RangeSelector from "./range-selector/component";
import React from "react";
import { HistoricalPrice } from "types/api";

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

  useEffect(() => {
    if (onRangeChange) {
      onRangeChange(range, data);
    }
  }, [data, range, onRangeChange]);

  return (
    <div style={{ height, width }}>
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

export default React.memo(CompanyChartContainer);
