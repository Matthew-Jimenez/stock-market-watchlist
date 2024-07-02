import CompanyChartContainer from "../../features/company-chart/components/container";
import Quote from "../../features/quote/components/container";
import CompanyName from "../../features/company-name/components/component";

const BrowseRoute = () => {
  return (
    <div>
      <CompanyName name="SPDR S&P 500 ETF" />

      <Quote symbol="SPY" />

      <div style={{ height: 400, width: 600 }}>
        <CompanyChartContainer symbol="SPY" range={5} />
      </div>
    </div>
  );
};

export default BrowseRoute;
