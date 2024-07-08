import algoliasearch from "algoliasearch";
import env from "config/env";

// potentially extract this to lib folder, if we have multiple algolia indexes
const APP_ID = env.ALGOLIA_APP_ID;
const SEARCH_KEY = env.ALGOLIA_SEARCH_API_KEY; // search key

// Connect and authenticate with your Algolia app
const algoliaClient = algoliasearch(APP_ID, SEARCH_KEY);

export default algoliaClient;
