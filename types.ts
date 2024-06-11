export type Repo = {
  id: number;
  full_name: string;
  description: string;
  owner: {
    avatar_url: string;
    login: string;
  };
  watchers: number;
  forks: number;
  stargazers_count: number;
  languages_url: string;
  html_url: string;
};

export enum ScreenStatus {
  Loading = "loading",
  Error = "error",
  Success = "success",
}
