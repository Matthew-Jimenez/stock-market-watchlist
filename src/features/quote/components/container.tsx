import { useLastTrade } from "../api/get-last-trade";
import QuoteComponent from "./component";

interface Params {
  symbol?: string;
}

const QuoteContainer = ({ symbol }: Params) => {
  const { data } = useLastTrade({ symbol, refetchInterval: 60000 * 5 });

  return <QuoteComponent price={data?.price} />;
};

export default QuoteContainer;
