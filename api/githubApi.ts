import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
});

export const fetchRepos = async (query: string) => {
  const response = await apiClient.get(`/search/repositories?q=${query}`);
  return response.data.items;
};
