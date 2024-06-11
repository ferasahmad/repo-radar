import axios from "axios";
import Constants from "expo-constants";

type ExpoConfig = {
  extra?: {
    githubKey?: string;
  };
};

const { githubKey } = (Constants.expoConfig as ExpoConfig)?.extra ?? {};

if (!githubKey) {
  throw new Error("GitHub API key is not defined in expo constants.");
}

const apiClient = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${githubKey}`,
  },
});

export const fetchRepos = async (query: string) => {
  const response = await apiClient.get(`/search/repositories?q=${query}`);
  return response.data.items;
};

export const fetchRepoLanguages = async (languagesUrl: string) => {
  const response = await apiClient.get(languagesUrl);
  return response.data;
};
