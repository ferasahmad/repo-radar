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
    gap: 7,
  },
  detailIcon: {
    height: 20,
    width: 20,
    tintColor: colors.gray,
  },
  detailText: {
    color: colors.gray,
    fontWeight: "500",
    fontSize: 14,
  },
});

export default RepoDetail;
