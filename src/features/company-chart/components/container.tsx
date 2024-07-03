import { useState } from "react";
import { useIntradayHistory } from "../api/get-intraday-history";
import Chart from "./component";
import RangeSelector from "./range-selector/component";
import React from "react";

interface Params {
  symbol?: string;
  onPointHovered?: (point: any) => void;
}

const CompanyChartContainer = ({ symbol = "", onPointHovered }: Params) => {
  const [range, setRange] = useState<number>(1);

  const { data } = useIntradayHistory({ symbol, range });

  return (
    <>
      <RangeSelector onSetRange={setRange} range={range} />

      <Chart onPointHovered={onPointHovered} data={data} range={range} />
    </>
  );
};

export default React.memo(CompanyChartContainer);
