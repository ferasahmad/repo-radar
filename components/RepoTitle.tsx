import React from "react";
import { Text } from "react-native";
import { colors } from "@/constants/colors";
import { escapeRegExp } from "@/utilities/escapeRegExp";

interface RepoTitleComponentProps {
  text: string;
  boldText: string;
  fontSize?: number;
  numberOfLines?: number;
}

const RepoTitle: React.FC<RepoTitleComponentProps> = ({
  text,
  boldText,
  fontSize = 16,
  numberOfLines,
}) => {
  const escapedBoldText = escapeRegExp(boldText);
  const parts = text.split(new RegExp(`(${escapedBoldText})`, "gi"));

  return (
    <Text numberOfLines={numberOfLines}>
      {parts.map((part, index) =>
        part.toLowerCase() === boldText.toLowerCase() ? (
          <Text
            key={index}
            style={{ fontWeight: "bold", fontSize, color: colors.darkGray }}
          >
            {part}
          </Text>
        ) : (
          <Text key={index} style={{ fontSize, color: colors.darkGray }}>
            {part}
          </Text>
        )
      )}
    </Text>
  );
};

export default RepoTitle;
