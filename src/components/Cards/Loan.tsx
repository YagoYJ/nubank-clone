import { Octicons } from "@expo/vector-icons";
import { Text, useColorMode } from "native-base";

import { OutlineButton } from "../OutlineButton";
import { CardTitle } from "./components/CardTitle";
import { CardSubtitle } from "./components/CardSubtitle";

export function Loan() {
  const { colorMode } = useColorMode();

  return (
    <>
      <CardTitle icon={Octicons} iconName="credit-card" title="Empréstimo" />

      <CardSubtitle text="Valor disponível até" />

      <Text
        color={colorMode === "dark" ? "white" : "muted.900"}
        fontSize="18"
        fontWeight="700"
        my="2"
      >
        R$ 5.000,00
      </Text>

      <OutlineButton text="SIMULAR EMPRÉSTIMO" />
    </>
  );
}
