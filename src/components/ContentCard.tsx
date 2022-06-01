import { ReactNode } from "react";
import { Box, useColorMode } from "native-base";

interface ContentCardProps {
  children: ReactNode;
}

export function ContentCard({ children }: ContentCardProps) {
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === "dark" ? "muted.300" : "gray.200"}
      w="100%"
      rounded={5}
      px="5"
      py="6"
    >
      {children}
    </Box>
  );
}
