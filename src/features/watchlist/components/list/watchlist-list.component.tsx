import styled from "@emotion/styled";

import List from "components/list/component";
import { muiTheme } from "lib/material-ui";

const WatchlistList = styled(List)`
  a > div {
    padding-top: 16px;
    padding-bottom: 16px;
    display: block;
    cursor: pointer;
    padding-left: 24px;
    padding-right: 24px;

    @media (max-width: ${muiTheme.breakpoints.values.lg}px) {
      padding-left: 0px;
      padding-right: 0px;
    }
  }

  padding-top: 0;
  padding-bottom: 0;
`;

export default WatchlistList;
