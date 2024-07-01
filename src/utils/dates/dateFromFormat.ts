import { DateTime } from "luxon";

interface Params {
  date?: string;
  format: string;
}

const dateFromFormat = ({ date, format }: Params) => {
  if (!date) {
    return undefined;
  }

  return DateTime.fromFormat(date, format);
};

export default dateFromFormat;
