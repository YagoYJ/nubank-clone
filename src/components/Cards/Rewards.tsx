import { Octicons } from "@expo/vector-icons";
import { Text, useColorMode } from "native-base";

import { OutlineButton } from "../OutlineButton";
import { CardTitle } from "./components/CardTitle";

export function Rewards() {
  const { colorMode } = useColorMode();

  return (
    <>
      <CardTitle
        icon={Octicons}
        iconName="gift"
        title="Rewards"
        darkThemeColor="brand.50"
        lightThemeColor="brand.100"
      />

      <Text
        color={colorMode === "dark" ? "white" : "muted.900"}
        fontSize="18"
        fontWeight="400"
        my="4"
      >
        Apague compras com pontos que nunca expiram
      </Text>

      <OutlineButton text="CONHECER" />
    </>
  );
}
