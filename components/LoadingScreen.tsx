import { View, StyleSheet, ActivityIndicator } from "react-native";

const LoadingScreen: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoadingScreen;
