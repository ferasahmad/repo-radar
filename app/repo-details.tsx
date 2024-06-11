import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Linking,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { ScreenStatus, Repo } from "@/types";
import GenericContainer from "@/components/GenericContainer";
import Divider from "@/components/Divider";
import { colors } from "@/constants/colors";
import { fetchRepoLanguages } from "../api/githubApi";
import RepoDetail from "@/components/RepoDetail";
import LoadingScreen from "@/components/LoadingScreen";
import Button from "@/components/Button";
import RepoTitle from "@/components/RepoTitle";

const RepoDetails: React.FC = () => {
  const { repo } = useLocalSearchParams();
  const data: Repo = JSON.parse(repo as string);
  const [languages, setLanguages] = useState<string[] | null>(null);
  const [status, setStatus] = useState<ScreenStatus>(ScreenStatus.Loading);

  useEffect(() => {
    const getLanguages = async () => {
      try {
        const languagesData = await fetchRepoLanguages(data.languages_url);
        const languageKeys = Object.keys(languagesData);
        setLanguages(languageKeys);
        setStatus(ScreenStatus.Success);
      } catch (error) {
        console.error("Error fetching languages:", error);
        setStatus(ScreenStatus.Error);
      }
    };

    getLanguages();
  }, [data.languages_url]);

  const handlePress = () => {
    Linking.openURL(data.html_url);
  };

  return (
    <GenericContainer style={styles.container}>
      {status === ScreenStatus.Loading && <LoadingScreen />}
      {status === ScreenStatus.Error && (
        <Text style={styles.errorText}>Failed to load page.</Text>
      )}
      {status === ScreenStatus.Success && languages && (
        <>
          <ScrollView>
            <View style={styles.header}>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.ownerIcon}
                  source={{ uri: data.owner.avatar_url }}
                />
              </View>
              <RepoTitle fullName={data.full_name} fontSize={22} />
              <View style={styles.detailsContainer}>
                <RepoDetail
                  icon={require("../assets/images/eye.png")}
                  value={data.watchers}
                />
                <RepoDetail
                  icon={require("../assets/images/repo-forked.png")}
                  value={data.forks}
                />
                <RepoDetail
                  icon={require("../assets/images/star.png")}
                  value={data.stargazers_count}
                />
              </View>
            </View>
            <Divider />
            <View style={styles.descriptionAndLanguages}>
              <Text style={styles.description}>{data.description}</Text>
              <View>
                <Text style={styles.languagesTitle}>Languages</Text>
                {languages.length > 0 ? (
                  languages.map((language) => (
                    <Text key={language} style={styles.language}>
                      {language}
                    </Text>
                  ))
                ) : (
                  <Text style={styles.noLanguagesText}>No languages used</Text>
                )}
              </View>
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <Button title="Go to Repo" onPress={handlePress} />
          </View>
        </>
      )}
    </GenericContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  header: {
    gap: 20,
    padding: 25,
    paddingTop: 0,
  },
  iconContainer: {
    borderRadius: 50,
    height: 70,
    width: 70,
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
    backgroundColor: colors.white,
  },
  ownerIcon: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  repoName: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.darkGray,
  },
  detailsContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 15,
  },
  descriptionAndLanguages: {
    padding: 25,
    gap: 20,
  },
  description: {
    fontSize: 18,
    color: colors.darkGray,
  },
  languagesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  language: {
    fontSize: 16,
    color: colors.darkGray,
  },
  noLanguagesText: {
    fontSize: 16,
    color: colors.gray,
  },
  errorText: {
    alignSelf: "center",
  },
  buttonContainer: {
    padding: 20,
    marginTop: "auto",
    position: "static",
    bottom: 0,
  },
});

export default RepoDetails;
