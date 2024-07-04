import { observer } from "mobx-react-lite";

import CompanyChartContainer from "features/company-chart/components/container";

import { useViewModel } from "../provider";

interface Props {
  symbol?: string;
  height?: number;
  width?: number;
}

const Chart = ({ symbol, width, height }: Props) => {
  const model = useViewModel();

  return (
    <CompanyChartContainer
      symbol={symbol}
      onPointHovered={model.setHoveredPoint}
      height={height}
      width={width}
    />
  );
};

export default observer(Chart);
