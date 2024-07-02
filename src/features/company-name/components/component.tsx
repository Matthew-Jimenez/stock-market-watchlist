import React from "react";
import Typography from "../../../components/typography";

interface Params {
  name?: string;
}

const CompanyName = ({ name }: Params) => {
  return <Typography variant="h1">{name}</Typography>;
};

export default React.memo(CompanyName);
