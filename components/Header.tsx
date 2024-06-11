import { View, Image, Text, StyleSheet } from "react-native";

const Header: React.FC = ({}) => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require("../assets/images/github.png")}
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
    fontSize: 18,
  },
  logo: {
    width: 35,
    marginRight: 10,
    height: 35,
  },
});

export default Header;
