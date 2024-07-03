import { observer } from "mobx-react-lite";
import CompanyChartContainer from "../../../../features/company-chart/components/container";
import { useViewModel } from "../provider";

interface Props {
  symbol?: string;
}

const Chart = ({ symbol }: Props) => {
  const model = useViewModel();

  return (
    <CompanyChartContainer
      symbol={symbol}
      onPointHovered={model.setHoveredPoint}
    />
  );
};

export default observer(Chart);
