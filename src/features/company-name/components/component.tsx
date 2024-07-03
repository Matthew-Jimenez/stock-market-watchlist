import React from "react";
import Typography from "../../../components/typography";
import Skeleton from "react-loading-skeleton";

interface Params {
  name?: string;
}

const CompanyName = ({ name }: Params) => {
  return (
    <Typography data-testid="copy--company-name" variant="h1">
      {name || (
        <Skeleton
          containerTestId="loading-skeleton--company-name"
          width={300}
        />
      )}
    </Typography>
  );
};

export default React.memo(CompanyName);
