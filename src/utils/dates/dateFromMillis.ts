import { DateTime } from "luxon";

interface Params {
  date?: number;
}

const dateFromMillis = ({ date }: Params) => {
  if (!date) {
    return undefined;
  }

  return DateTime.fromSeconds(date);
};

export default dateFromMillis;
