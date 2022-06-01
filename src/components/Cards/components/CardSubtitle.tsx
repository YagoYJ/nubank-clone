import { Text, ITextProps, useColorMode } from "native-base";

interface CardSubtitleProps extends ITextProps {
  text: string;
}

export function CardSubtitle({ text, ...rest }: CardSubtitleProps) {
  const { colorMode } = useColorMode();
  return (
    <Text
      color={colorMode === "dark" ? "muted.100" : "muted.200"}
      fontSize="14"
      fontWeight="400"
      mt="14px"
      {...rest}
    >
      {text}
    </Text>
  );
}
