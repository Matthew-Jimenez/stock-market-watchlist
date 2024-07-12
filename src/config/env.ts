const createEnv = () => {
  return {
    BASE_API: process.env.REACT_APP_BASE_API || "",
    ALGOLIA_APP_ID: process.env.REACT_APP_ALGOLIA_APP_ID || "",
    ALGOLIA_SEARCH_API_KEY: process.env.REACT_APP_ALGOLIA_SEARCH_KEY || "",
    ENV: process.env.REACT_APP_ENV || "local",
    SENTRY_DSN: process.env.REACT_APP_SENTRY_DSN || "",
  };
};

export default createEnv();
