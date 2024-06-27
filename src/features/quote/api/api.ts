import env from "../../../config/env";
import BaseAPI from "../../../lib/api-client";
import { LastTrade } from "../../../types/api";

class QuoteAPI extends BaseAPI {
  constructor() {
    super(env.BASE_API);
  }

  public getLastTrade = (symbol: string) => {
    return this.get<LastTrade>(`/last-trade?symbol=${symbol}`);
  };
}

export default QuoteAPI;
