import { ReactNode } from "react";
import { Flex, Icon, Text, useColorMode } from "native-base";

interface CardTitleProps {
  title: string;
  icon: ReactNode;
  iconName: string;
  darkThemeColor?: string;
  lightThemeColor?: string;
}

export function CardTitle({
  icon,
  title,
  iconName,
  darkThemeColor = "white",
  lightThemeColor = "muted.900",
}: CardTitleProps) {
  const { colorMode } = useColorMode();
  return (
    <Flex direction="row" alignItems="center">
      <Icon
        as={icon}
        name={iconName}
        size="4"
        color={colorMode === "dark" ? darkThemeColor : lightThemeColor}
        mr="14px"
      />
      <Text
        fontWeight="400"
        fontSize="14"
        color={colorMode === "dark" ? darkThemeColor : lightThemeColor}
      >
        {title}
      </Text>
    </Flex>
  );
}
