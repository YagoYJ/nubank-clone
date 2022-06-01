import { Octicons } from "@expo/vector-icons";
import { Text, useColorMode } from "native-base";

import { CardTitle } from "./components/CardTitle";
import { CardSubtitle } from "./components/CardSubtitle";

export function Account() {
  const { colorMode } = useColorMode();
  return (
    <>
      <CardTitle icon={Octicons} iconName="credit-card" title="Conta" />

      <CardSubtitle text="Saldo disponível" />

      <Text
        color={colorMode === "dark" ? "white" : "muted.900"}
        fontSize="28"
        fontWeight="700"
        my="2"
      >
        R$ 234.756.551,05
      </Text>
    </>
  );
}
