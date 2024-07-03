import { useSearchParams } from "react-router-dom";
import BrowseProvider from "./provider";
import BrowseView from "./view";

const Browse = () => {
  let [searchParams] = useSearchParams();
  const symbol = searchParams.get("symbol") || undefined;

  return (
    <BrowseProvider>
      <BrowseView symbol={symbol} />
    </BrowseProvider>
  );
};

export default Browse;
