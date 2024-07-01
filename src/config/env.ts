const createEnv = () => {
  return {
    BASE_API: process.env.REACT_APP_BASE_API || "",
  };
};

export default createEnv();
