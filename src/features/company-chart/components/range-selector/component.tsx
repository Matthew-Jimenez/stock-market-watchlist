import { useMemo } from "react";
import OutlinedButtonGroup from "../../../../components/button-group/outlined";

interface Params {
  onSetRange: (range: number) => void;
  range: number;
}

const RangeSelector = ({ onSetRange, range }: Params) => {
  const buttons = useMemo(() => {
    return [
      { label: "1D", value: 1 },
      { label: "1W", value: 5 },
      { label: "1M", value: 30 },
      { label: "3M", value: 90 },
      { label: "1Y", value: 365 },
      { label: "5Y", value: 1825 },
    ];
  }, []);

  return (
    <OutlinedButtonGroup
      buttons={buttons}
      onSelect={onSetRange}
      selectedValue={range}
    />
  );
};

export default RangeSelector;
