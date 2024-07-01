import { useIntradayHistory } from "../api/get-intraday-history";
import Chart from "./component";

interface Params {
  symbol?: string;
}

const CompanyChartContainer = ({ symbol = "" }: Params) => {
  const { data } = useIntradayHistory({ symbol });

  return <Chart data={data} range={1} />;
};

export default CompanyChartContainer;
