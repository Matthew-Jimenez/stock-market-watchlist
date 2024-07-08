import algoliaClient from "../../lib/algoliasearch";

const companiesIndex = algoliaClient.initIndex("companies");

export default companiesIndex;
