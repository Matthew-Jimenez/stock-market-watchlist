import { useState } from "react";
import { useIntradayHistory } from "../api/get-intraday-history";
import Chart from "./component";
import RangeSelector from "./range-selector/component";
import React from "react";

interface Params {
  symbol?: string;
  onPointHovered?: (point: any) => void;
  height?: number;
  width?: number;
}

const CompanyChartContainer = ({
  symbol = "",
  onPointHovered,
  height,
  width,
}: Params) => {
  const [range, setRange] = useState<number>(1);

  const { data } = useIntradayHistory({ symbol, range });

  return (
    <>
      <RangeSelector onSetRange={setRange} range={range} />

      <Chart
        onPointHovered={onPointHovered}
        data={data}
        range={range}
        height={height}
        width={width}
      />
    </>
  );
};

export default React.memo(CompanyChartContainer);
