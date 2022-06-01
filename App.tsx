import "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import { extendTheme, NativeBaseProvider, useColorMode } from "native-base";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular,
  Roboto_300Light,
} from "@expo-google-fonts/roboto";

import { Home } from "./src/pages/Home";
import { CustomStatusBar } from "./src/components/CustomStatusBar";

import { darkThemeColors, lightThemeColors } from "./src/styles/colors";

export default function App() {
  const { colorMode } = useColorMode();

  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_300Light,
  });

  const customTheme = extendTheme({
    colors: colorMode === "dark" ? darkThemeColors : lightThemeColors,
    fontConfig: {
      Roboto: {
        300: {
          normal: Roboto_300Light,
        },
        400: {
          normal: Roboto_400Regular,
        },
        500: {
          normal: Roboto_500Medium,
        },
        700: {
          normal: Roboto_700Bold,
        },
      },
    },
    fontSizes: {
      "3xl": 28,
    },
    config: {
      initialColorMode: "dark",
    },
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NativeBaseProvider theme={customTheme}>
      <Home />
      <CustomStatusBar />
    </NativeBaseProvider>
  );
}
