import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "expo-router";
import { fetchRepos } from "../api/githubApi";
import { debounce } from "../utilities/debounce";
import { colors } from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/components/Header";
import RepoItem from "@/components/RepoItem";
import SearchInput from "@/components/SearchInput";
import { Repo } from "@/types";
import LoadingScreen from "@/components/LoadingScreen";

enum Status {
  Loading = "loading",
  Error = "error",
  Success = "success",
}

export default function Index() {
  const [query, setQuery] = useState<string>("");
  const [repos, setRepos] = useState<Repo[]>([]);
  const [status, setStatus] = useState<Status>();
  const navigation = useNavigation();

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

  const renderContent = () => {
    switch (status) {
      case Status.Loading:
        return <LoadingScreen />;
      case Status.Error:
        return (
          <Text style={styles.errorText}>Failed to fetch repositories</Text>
        );
      case Status.Success:
        return (
          <FlatList
            style={styles.list}
            data={repos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <RepoItem repo={item} />
              </TouchableOpacity>
            )}
          />
        );
    }
  };

  return (
    <LinearGradient
      colors={[colors.pink, colors.white]}
      style={styles.container}
    >
      <View style={styles.HeaderAndSearchContainer}>
        <Header />
        <SearchInput query={query} setQuery={setQuery} />
      </View>
      <View style={styles.content}>{renderContent()}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
