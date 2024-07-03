import CompanyName from "../../../features/company-name/components/component";
import Chart from "./containers/chart";
import Quote from "./containers/quote";

interface Props {
  symbol?: string;
}

const BrowseView = ({ symbol }: Props) => {
  return (
    <div>
      <CompanyName name="SPDR S&P 500 ETF" />

      <Quote symbol={symbol} />

      <div style={{ height: 400, width: 600 }}>
        <Chart symbol={symbol} />
      </div>
    </div>
  );
};

export default BrowseView;
