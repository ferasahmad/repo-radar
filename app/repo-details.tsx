import { Text, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Repo } from "@/types";

export default function RepoScreen() {
  const { repo } = route.params as { repo: Repo };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Repository Details</Text>
      <Text style={styles.info}>Repository ID: {repo.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  info: {
    fontSize: 18,
    marginTop: 10,
  },
});
