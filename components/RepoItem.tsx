import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../constants/colors";
import { Repo } from "@/types";

interface RepoItemProps {
  repo: Repo;
}

const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
  return (
    <View style={styles.repoItem}>
      <View style={styles.iconAndNameContainer}>
        <Image
          style={styles.ownerIcon}
          source={{ uri: repo.owner.avatar_url }}
        />
        <Text style={styles.repoName}>{repo.full_name}</Text>
      </View>
      <Text style={styles.repoDescription}>{repo.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  repoItem: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 20,
    padding: 16,
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.15,
    shadowRadius: 0.5,
    elevation: 2,
  },
  ownerIcon: {
    height: 30,
    width: 30,
    borderRadius: 7,
  },
  iconAndNameContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  repoName: {
    fontWeight: "bold",
  },
  repoDescription: {
    marginTop: 4,
  },
});

export default RepoItem;
