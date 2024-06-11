import axios from "axios";

const githubKey = process.env.EXPO_PUBLIC_GITHUB_TOKEN;

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
