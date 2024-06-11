import React from "react";
import { View, StyleSheet } from "react-native";

const Divider: React.FC = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    marginVertical: 10,
  },
});

export default Divider;
