import CompanyChartContainer from "../../features/company-chart/components/container";
import Quote from "../../features/quote/components/container";

const BrowseRoute = () => {
  return (
    <div>
      <Quote symbol="SPY" />

      <div style={{ height: 400, width: 600 }}>
        <CompanyChartContainer symbol="SPY" range={5} />
      </div>
    </div>
  );
};

export default BrowseRoute;
