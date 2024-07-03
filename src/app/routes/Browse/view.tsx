import CompanyName from "../../../features/company-name/components/component";
import Chart from "./containers/chart";
import Quote from "./containers/quote";

const BrowseView = () => {
  return (
    <div>
      <CompanyName name="SPDR S&P 500 ETF" />

      <Quote symbol="SPY" />

      <div style={{ height: 400, width: 600 }}>
        <Chart symbol="SPY" />
      </div>
    </div>
  );
};

export default BrowseView;
