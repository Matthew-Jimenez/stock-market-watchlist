import { useState } from "react";
import { useIntradayHistory } from "../api/get-intraday-history";
import Chart from "./component";
import RangeSelector from "./range-selector/component";

interface Params {
  symbol?: string;
  range?: number;
}

const CompanyChartContainer = ({ symbol = "" }: Params) => {
  const [range, setRange] = useState<number>(1);

  const { data } = useIntradayHistory({ symbol, range });

  return (
    <>
      <RangeSelector onSetRange={setRange} range={range} />

      <Chart data={data} range={range} />
    </>
  );
};

export default CompanyChartContainer;
