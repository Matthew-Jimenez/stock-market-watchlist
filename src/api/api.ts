import env from "../config/env";
import BaseAPI from "../lib/api-client";
import { CompanyInfo, HistoricalPrice, LastTrade, Quote } from "../types/api";

class MainAPI extends BaseAPI {
  constructor() {
    super(env.BASE_API);
  }

  public getCompany = (symbol: string) => {
    return this.get<CompanyInfo[]>(`/companies?symbol=${symbol}`);
  };

  public getLastTrade = (symbol: string) => {
    return this.get<LastTrade>(`/last-trade?symbol=${symbol}`);
  };

  public getQuote = (symbol: string) => {
    return this.get<Quote[]>(`/quote?symbol=${symbol}`);
  };

  public getIntradayHistory = (params: GetIntradayHistoryParams) => {
    const { symbol } = params;

    return this.get<HistoricalPrice[]>(`/intraday-history?symbol=${symbol}`);
  };

  public getHistory = (params: GetHistoryParams) => {
    const { symbol, range } = params;

    return this.get<HistoricalPrice[]>(
      `/history?symbol=${symbol}&range=${range}`
    );
  };

  // we define this in our api class because we will eventually want to
  // send this data to a backend service instead of using local storage
  public getWatchlist = () => {
    const stringValue = localStorage.getItem("watchlist") || "[]";

    return (JSON.parse(stringValue) as string[]) || undefined;
  };

  // we define this in our api class because we will eventually want to
  // send this data to a backend service instead of using local storage
  public addWatchlistItem = async (symbol: string): Promise<string> => {
    const watchlist = this.getWatchlist();

    const newWatchlist = [...watchlist, symbol];

    localStorage.setItem("watchlist", JSON.stringify(newWatchlist));

    return symbol;
  };

  // we define this in our api class because we will eventually want to
  // send this data to a backend service instead of using local storage
  public removeWatchlistItem = async (symbol: string) => {
    const watchlist = this.getWatchlist();

    const newWatchlist = watchlist.filter((s: string) => s !== symbol);

    localStorage.setItem("watchlist", JSON.stringify(newWatchlist));
  };
}

export default MainAPI;
