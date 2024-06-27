const getEnv = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is missing`);
  }

  return value;
};

const createEnv = () => {
  return {
    BASE_API: getEnv("REACT_APP_BASE_API"),
  };
};

export default createEnv();
