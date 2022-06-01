import { Box, ScrollView, useColorMode, VStack } from "native-base";

import { Header } from "../../components/Header";
import { ContentCard } from "../../components/ContentCard";
import { CreditCard } from "../../components/Cards/CreditCard";
import { Account } from "../../components/Cards/Account";
import { Loan } from "../../components/Cards/Loan";
import { Rewards } from "../../components/Cards/Rewards";

export function Home() {
  const { colorMode } = useColorMode();

  return (
    <Box flex={1} bg={colorMode === "dark" ? "black" : "white"} safeArea>
      <ScrollView>
        <Header />

        <VStack space="3" px="5" py="7">
          <ContentCard>
            <CreditCard />
          </ContentCard>

          <ContentCard>
            <Account />
          </ContentCard>

          <ContentCard>
            <Loan />
          </ContentCard>

          <ContentCard>
            <Rewards />
          </ContentCard>
        </VStack>
      </ScrollView>
    </Box>
  );
}
