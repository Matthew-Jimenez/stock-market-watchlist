import { observer } from "mobx-react-lite";

import QuoteContainer from "features/quote/components/container";

import { useViewModel } from "../provider";

interface Props {
  symbol?: string;
}

const Quote = ({ symbol }: Props) => {
  const model = useViewModel();

  return (
    <QuoteContainer
      priceOverride={model.hoveredPoint?.close}
      symbol={symbol}
      comparePriceOverride={model.chartComparePoint?.close}
      comparePriceDate={model.chartComparePoint?.date}
    />
  );
};

export default observer(Quote);
