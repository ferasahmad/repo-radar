import { colors } from "@/constants/colors";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface RepoTitleProps {
  fullName: string;
  fontSize?: number;
}

const RepoTitle: React.FC<RepoTitleProps> = ({ fullName, fontSize = 16 }) => {
  const [owner, repo] = fullName.split("/");

  return (
    <View style={styles.container}>
      <Text style={[styles.owner, { fontSize }]}>{owner}/</Text>
      <Text style={[styles.repo, { fontSize }]}>{repo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  owner: {
    color: colors.darkGray,
  },
  repo: {
    color: colors.darkGray,
    fontWeight: "bold",
  },
});

export default RepoTitle;
