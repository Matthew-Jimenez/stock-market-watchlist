import { useIntradayHistory } from "../api/get-intraday-history";
import Chart from "./component";

interface Params {
  symbol?: string;
  range?: number;
}

const CompanyChartContainer = ({ symbol = "", range }: Params) => {
  const { data } = useIntradayHistory({ symbol, range });

  return <Chart data={data} range={range} />;
};

export default CompanyChartContainer;
