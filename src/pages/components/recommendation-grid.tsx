import React from "react";
import { Grid, Box, Link, Flex, Text, Tag, VStack } from "@chakra-ui/react";

const RecommendationGridItem = () => (
  <Link w="full" h="200px" textDecoration="none" marginBottom="24px">
    <Box marginBottom="8px">
      <Box w="full" h="120px" bg="cyan.500" borderRadius="8px" />
    </Box>
    <Box>
      <Tag
        size="sm"
        variant="solid"
        bgColor="secondary.orange"
        textDecoration="none"
      >
        Precisa de Reparo
      </Tag>
      <Text color="text.heading" fontSize="0.875rem">
        Fiat Uno Fire Flex Economy
      </Text>
      <Text color="text.heading" fontSize="1rem" fontWeight="bold">
        R$ 22.000
      </Text>
    </Box>
  </Link>
);

export const RecommendationGrid = () => {
  return (
    <Flex
      flexDirection="column"
      gridGap="24px"
      width="full"
      marginTop="32px"
      bg="white"
      padding="24px 16px"
      maxWidth="1158px"
    >
      <Text color="text.heading" fontSize="20px" fontWeight="semibold">
        Anúncios recentes
      </Text>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gridGap="16px 24px"
      >
        <RecommendationGridItem />
        <RecommendationGridItem />
        <RecommendationGridItem />
        <RecommendationGridItem />
        <RecommendationGridItem />
        <RecommendationGridItem />
        <RecommendationGridItem />
        <RecommendationGridItem />
        <RecommendationGridItem />
        <RecommendationGridItem />
        <RecommendationGridItem />
        <RecommendationGridItem />
      </Grid>
    </Flex>
  );
};
