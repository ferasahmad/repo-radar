import { View, Image, Text, StyleSheet } from "react-native";

const Header: React.FC = ({}) => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require("../assets/images/repo-radar-logo.png")}
      />
      <Text style={styles.headerTitle}>GitHub Repo Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 70,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },
  logo: {
    width: 39.85,
    height: 39.18,
    marginRight: 10,
    tintColor: "black",
  },
});

export default Header;
