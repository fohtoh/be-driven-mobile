import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.48.209:3000/api/graphql",
    // apiUrl: "http://api.be-driven.club/api/graphql",
  },
  staging: {
    apiUrl: "http://api.be-driven.club/api/graphql",
  },
  prod: {
    apiUrl: "http://api.be-driven.club/api/graphql",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
