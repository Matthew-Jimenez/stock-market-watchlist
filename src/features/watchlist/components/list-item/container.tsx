import { useQuote } from "../../../quote/api/get-quote";
import Component from "./component";

interface Props {
  symbol?: string;
}

const WatchlistListItem = ({ symbol }: Props) => {
  const { data } = useQuote({ symbol, refetchInterval: 15000 });

  return <Component symbol={symbol} price={data?.price} />;
};

export default WatchlistListItem;
