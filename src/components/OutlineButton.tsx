import { Button, Text, useColorMode } from "native-base";

interface OutlineButtonProps {
  text: string;
}

export function OutlineButton({ text }: OutlineButtonProps) {
  const { colorMode } = useColorMode();

  return (
    <Button
      size="md"
      variant="outline"
      bg="transparent"
      borderColor={colorMode === "dark" ? "white" : "brand.100"}
      colorScheme="purple"
    >
      <Text
        color={colorMode === "dark" ? "white" : "brand.100"}
        fontWeight={700}
      >
        {text}
      </Text>
    </Button>
  );
}
