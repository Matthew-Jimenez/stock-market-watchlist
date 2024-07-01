import env from "../config/env";
import BaseAPI from "../lib/api-client";
import { HistoricalPrice, LastTrade } from "../types/api";

class MainAPI extends BaseAPI {
  constructor() {
    super(env.BASE_API);
  }

  public getLastTrade = (symbol: string) => {
    return this.get<LastTrade>(`/last-trade?symbol=${symbol}`);
  };

  public getIntradayHistory = (params: GetIntradayHistoryParams) => {
    const { symbol } = params;

    return this.get<HistoricalPrice[]>(`/intraday-history?symbol=${symbol}`);
  };
}

export default MainAPI;
