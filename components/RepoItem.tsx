import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../constants/colors";
import { Repo } from "@/types";
import RepoTitle from "./RepoTitle";

interface RepoItemProps {
  repo: Repo;
  searchValue: string;
}

const RepoItem: React.FC<RepoItemProps> = ({ repo, searchValue }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconAndNameContainer}>
        <Image
          style={styles.ownerIcon}
          source={{ uri: repo.owner.avatar_url }}
        />
        <RepoTitle
          fullName={repo.full_name}
          fontSize={14}
          boldText={searchValue}
        />
      </View>
      {repo.description && (
        <Text style={styles.repoDescription} numberOfLines={10}>
          {repo.description}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 16,
    padding: 16,
    gap: 10,
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
  repoDescription: {
    color: colors.darkGray,
    fontSize: 14,
  },
});

export default RepoItem;
