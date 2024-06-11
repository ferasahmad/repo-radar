import { Stack } from "expo-router";
import { colors } from "@/constants/colors";

export default function RootLayout() {
  const headerOptions = {
    title: "",
    headerStyle: {
      backgroundColor: colors.pink,
    },
    headerTintColor: colors.darkGray,
    headerBackTitleVisible: false,
    headerShadowVisible: false,
  };

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="repo-details" options={headerOptions} />
    </Stack>
  );
}
