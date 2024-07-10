import { action, makeAutoObservable, observable } from "mobx";

import { HistoricalPrice } from "types/api";

/**
 *  View model for the browse view.
 */
class BrowseViewModel {
  /**
   * When the user is hovering, this is the point that is used to generate
   * the change percentage based on the hovered point and this point.
   *
   * This point is either going to be the earliest point available by range or
   * the previous days closing price if the chart range is set to 1 day.
   */
  @observable
  public chartComparePoint?: HistoricalPrice;

  /**
   *  The point that the user is currently hovering over on the chart.
   */
  @observable
  public hoveredPoint?: HistoricalPrice;

  @action
  public setChartComparePoint = (point?: HistoricalPrice) => {
    this.chartComparePoint = point;
  };

  @action
  public setHoveredPoint = (point?: HistoricalPrice) => {
    this.hoveredPoint = point;
  };

  constructor() {
    // mobx 6 requires explicit makeAutoObservable
    makeAutoObservable(this);
  }
}

export default BrowseViewModel;
