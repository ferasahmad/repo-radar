import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../constants/colors";

interface GenericContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const GenericContainer: React.FC<GenericContainerProps> = ({
  children,
  style,
}) => {
  return (
    <LinearGradient
      style={styles.gradientContainer}
      colors={[colors.pink, colors.white]}
    >
      <SafeAreaView style={[styles.safeArea, style]}>{children}</SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});

export default GenericContainer;
