import { useLastTrade } from "../../../quote/api/get-last-trade";
import Component from "./component";

interface Props {
  symbol?: string;
}

const WatchlistListItem = ({ symbol }: Props) => {
  const { data } = useLastTrade({ symbol, refetchInterval: 15000 });

  return <Component symbol={symbol} price={data?.price} />;
};

export default WatchlistListItem;
