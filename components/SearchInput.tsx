import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";

interface SearchInputProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ query, setQuery }) => {
  console.log(process.env.GITHUB_TOKEN);
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/search.png")}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={query}
        onChangeText={setQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(239, 236, 245)",
    borderRadius: 10,
    paddingHorizontal: 8,
    gap: 10,
    height: 50,
  },
  icon: {
    height: 25,
    width: 25,
    tintColor: "black",
  },
  input: {
    height: 50,
    flexGrow: 1,
  },
});

export default SearchInput;
