import { action, makeAutoObservable, observable } from "mobx";

import { HistoricalPrice } from "types/api";

class BrowseViewModel {
  @observable
  public hoveredPoint?: HistoricalPrice;

  @action
  public setHoveredPoint = (point?: HistoricalPrice) => {
    this.hoveredPoint = point;
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default BrowseViewModel;
