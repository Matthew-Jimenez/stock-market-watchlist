import CompanyNameContainer from "../../../features/company-name/components/container";
import Chart from "./containers/chart";
import Quote from "./containers/quote";

interface Props {
  symbol?: string;
}

const BrowseView = ({ symbol }: Props) => {
  return (
    <div>
      <CompanyNameContainer symbol={symbol} />

      <Quote symbol={symbol} />

      <div style={{ height: 400, width: 600 }}>
        <Chart symbol={symbol} />
      </div>
    </div>
  );
};

export default BrowseView;
