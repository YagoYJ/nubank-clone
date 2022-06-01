import { Octicons } from "@expo/vector-icons";
import { Text, useColorMode } from "native-base";

import { CardTitle } from "./components/CardTitle";
import { CardSubtitle } from "./components/CardSubtitle";

export function CreditCard() {
  const { colorMode } = useColorMode();

  return (
    <>
      <CardTitle
        icon={Octicons}
        iconName="credit-card"
        title="Cartão de crédito"
      />

      <CardSubtitle text="Fatura atual" />

      <Text color="info.500" fontSize="28" fontWeight="700" my="2">
        R$ 2.551,05
      </Text>

      <Text
        color={colorMode === "dark" ? "white" : "muted.900"}
        fontSize="14"
        fontWeight="700"
      >
        Limite disponível <Text color="success.500">R$ 1.205,10</Text>
      </Text>
    </>
  );
}
