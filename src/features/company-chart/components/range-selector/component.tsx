interface Params {
  onSetRange: (range: number) => void;
  range: number;
}

const RangeSelector = ({ onSetRange, range }: Params) => {
  return (
    <>
      <button onClick={() => onSetRange(1)}>1D</button>
      <button onClick={() => onSetRange(5)}>5D</button>
      <button onClick={() => onSetRange(30)}>1M</button>
      <button onClick={() => onSetRange(90)}>3M</button>
      <button onClick={() => onSetRange(365)}>1Y</button>
      <button onClick={() => onSetRange(1825)}>5Y</button>
    </>
  );
};

export default RangeSelector;
