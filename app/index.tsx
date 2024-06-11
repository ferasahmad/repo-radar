import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { fetchRepos } from "../api/githubApi";
import { debounce } from "../utilities/debounce";
import Header from "@/components/Header";
import RepoItem from "@/components/RepoItem";
import SearchInput from "@/components/SearchInput";
import { Repo } from "@/types";
import LoadingScreen from "@/components/LoadingScreen";
import GenericContainer from "@/components/GenericContainer";

enum Status {
  Loading = "loading",
  Error = "error",
  Success = "success",
}

const Index: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [repos, setRepos] = useState<Repo[]>([]);
  const [status, setStatus] = useState<Status>();

  const handleSearch = useCallback(
    debounce(async (query: string) => {
      if (query.length > 0) {
        setStatus(Status.Loading);
        try {
          const results = await fetchRepos(query);
          setRepos(results);
          setStatus(Status.Success);
        } catch (err) {
          setStatus(Status.Error);
        }
      } else {
        setRepos([]);
      }
    }, 500),
    []
  );

  useEffect(() => {
    handleSearch(query);
  }, [query, handleSearch]);

  return (
    <GenericContainer>
      <View style={styles.HeaderAndSearchContainer}>
        <Header />
        <SearchInput query={query} setQuery={setQuery} />
      </View>
      <View style={styles.content}>
        {status === Status.Loading && <LoadingScreen />}
        {status === Status.Error && (
          <Text style={styles.errorText}>Failed to fetch repositories</Text>
        )}
        {status === Status.Success && (
          <FlatList
            style={styles.list}
            data={repos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: "/repo-details",
                    params: { repo: JSON.stringify(item) },
                  })
                }
              >
                <RepoItem repo={item} />
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </GenericContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 20,
  },
  HeaderAndSearchContainer: {
    marginHorizontal: 25,
  },
  list: {
    marginHorizontal: 25,
  },
  loadingIndicator: {
    alignSelf: "center",
  },
  errorText: {
    alignSelf: "center",
  },
  idleText: {
    alignSelf: "center",
  },
});

export default Index;
