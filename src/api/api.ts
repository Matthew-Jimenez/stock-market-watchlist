import env from "../config/env";
import BaseAPI from "../lib/api-client";
import { CompanyInfo, HistoricalPrice, LastTrade } from "../types/api";

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
}

export default MainAPI;
