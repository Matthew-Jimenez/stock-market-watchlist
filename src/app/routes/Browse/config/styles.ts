import { GridDirection } from "@mui/material";
import { CSSProperties } from "react";

export const COMPANY_NAME_CONTAINER_STYLES = {
  display: "flex",
  alignItems: "center",
  paddingTop: 16,
};

export const CONTAINER_STYLES = {
  height: "100%",
  paddingTop: 24,
  paddingBottom: 12,
};

export const WATCHLIST_HEADER_STYLES = {
  marginTop: {
    xs: 4,
    lg: 0,
  },
  textAlign: {
    xs: "left",
    lg: "center",
  },
  marginBottom: 3,
};

export const FADE_TIMEOUT = {
  exit: 0,
  enter: 2200,
};

export const WATCHLIST_CONTAINER = {
  overflow: {
    xs: "scroll",
    lg: "initial",
  },
  maxHeight: {
    xs: "33vh",
    lg: "80vh",
  },
  style: {
    overflowY: "scroll",
    scrollbarWidth: "none",
  } as CSSProperties,
};

export const GRID0 = {
  direction: {
    xs: "column" as GridDirection,
    lg: "row" as GridDirection,
  },
};

export const GRID1 = {
  maxHeight: {
    xs: "60vh",
    lg: "initial",
  },
};

export const GRID2_BORDER = {
  xs: "none",
  lg: "1px solid lightgrey",
};
