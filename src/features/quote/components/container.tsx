import { useLastTrade } from "../api/get-last-trade";
import QuoteComponent from "./component";

interface Params {
  symbol?: string;
}

const QuoteContainer = ({ symbol }: Params) => {
  const { data } = useLastTrade({ symbol, refetchInterval: 3000 });

  return <QuoteComponent symbol={symbol} price={data?.price} />;
};

export default QuoteContainer;
