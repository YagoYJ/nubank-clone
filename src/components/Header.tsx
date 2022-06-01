import { HStack, Text } from "native-base";
import { ToggleThemeSwitch } from "./ToggleThemeSwitch";

export function Header() {
  return (
    <HStack justifyContent="space-between" alignItems="center" px="5" py="7">
      <Text fontSize="2xl" fontWeight="700">
        Olá, Yago
      </Text>
      <ToggleThemeSwitch />
    </HStack>
  );
}
