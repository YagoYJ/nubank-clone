import { Feather } from "@expo/vector-icons";
import { HStack, Icon, Switch, useColorMode } from "native-base";

export function ToggleThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack alignItems="center" justifyContent="center" space={2}>
      {colorMode === "dark" ? (
        <Icon as={Feather} name="sun" color="tertiary.50" size={25} />
      ) : (
        <Icon as={Feather} name="moon" color="muted.300" size={25} />
      )}

      <Switch
        size="md"
        offTrackColor="tertiary.50"
        offThumbColor="muted.300"
        onTrackColor="muted.300"
        onThumbColor="tertiary.50"
        onChange={toggleColorMode}
      />
    </HStack>
  );
}
