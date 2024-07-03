import BrowseProvider from "./provider";
import BrowseView from "./view";

const Browse = () => {
  return (
    <BrowseProvider>
      <BrowseView />
    </BrowseProvider>
  );
};

export default Browse;
