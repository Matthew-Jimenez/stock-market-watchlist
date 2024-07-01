export type LastTrade = {
  symbol: string;
  price: number;
  timestamp: number;
};

export type HistoricalPrice = {
  date: string;
  open: number;
  low: number;
  high: number;
  close: number;
  volume: number;
};
