import { createContext, useContext } from "react";

import BrowseViewModel from "./model";

const Context = createContext<BrowseViewModel | undefined>(undefined);

export const useViewModel = () => {
  const model = useContext(Context);

  if (!model) {
    throw new Error("useViewModel must be used within a BrowseProvider");
  }

  return model;
};

interface Props {
  children: React.ReactNode;
}

const BrowseProvider = ({ children }: Props) => {
  return (
    <Context.Provider value={new BrowseViewModel()}>
      {children}
    </Context.Provider>
  );
};

export default BrowseProvider;
