import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

interface SearchInputProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ query, setQuery }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={query}
        onChangeText={setQuery}
        placeholderTextColor={colors.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  input: {
    height: 50,
    backgroundColor: "rgb(239, 236, 245)",
    borderRadius: 10,
    marginBottom: 30,
    paddingHorizontal: 8,
  },
});

export default SearchInput;
