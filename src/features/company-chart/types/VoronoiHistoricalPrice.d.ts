import { HistoricalPrice } from "../../../types/api";

interface VoronoiHistoricalPrice extends HistoricalPrice {
  childName: string;
  eventKey: number;
  style: any;
  xName: string; // date
  _voronoiX: number;
  _voronoiY: number;
  _x: number;
  _y: number;
}
