import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { colors } from "@/constants/colors";
import { formatNumber } from "@/utilities/formatNumber";

interface RepoDetailProps {
  icon: ImageSourcePropType;
  value: number;
}

const RepoDetail: React.FC<RepoDetailProps> = ({ icon, value }) => {
  return (
    <View style={styles.detailContainer}>
      <Image style={styles.detailIcon} source={icon} />
      <Text style={styles.detailText}>{formatNumber(value)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  detailIcon: {
    height: 16,
    width: 16,
    tintColor: colors.gray,
  },
  detailText: {
    color: colors.gray,
    fontWeight: "600",
    fontSize: 12,
  },
});

export default RepoDetail;
