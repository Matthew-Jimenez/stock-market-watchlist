import { observer } from "mobx-react-lite";

import CompanyChartContainer from "features/company-chart/components/container";

import { useViewModel } from "../provider";
import { useCallback } from "react";
import { HistoricalPrice } from "types/api";

interface Props {
  symbol?: string;
  height?: number;
  width?: number;
}

const Chart = ({ symbol, width, height }: Props) => {
  const model = useViewModel();

  const handleRangeChange = useCallback(
    (range?: number, data?: HistoricalPrice[]) => {
      if (range === 1) {
        return;
      }

      const comparePoint = data?.[0];

      model.setChartComparePoint(comparePoint);
    },
    [model]
  );

  return (
    <CompanyChartContainer
      symbol={symbol}
      onPointHovered={model.setHoveredPoint}
      height={height}
      width={width}
      onRangeChange={handleRangeChange}
    />
  );
};

export default observer(Chart);
