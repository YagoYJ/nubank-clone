import { useColorMode } from "native-base";
import { StatusBar } from "react-native";

export function CustomStatusBar() {
  const { colorMode } = useColorMode();

  return (
    <StatusBar
      barStyle={colorMode === "dark" ? "light-content" : "dark-content"}
    />
  );
}
