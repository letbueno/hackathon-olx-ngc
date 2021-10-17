import React from "react";
import { Grid, Box, Link, Flex, Text, Tag, VStack } from "@chakra-ui/react";

const products = [
  {
    title: "TV LCD SEMP TOSHIBA",
    price: "R$ 450",
  },
  {
    title: "IPHONE 7 32GB TELA QUEBRADA",
    price: "R$ 750",
    tag: "Precisa de reparo",
  },
  {
    title: "TECLADO MUSICAL CASIO CTS195 BK",
    price: "R$ 1.000",
  },
  {
    title: "Fiat Uno Fire Flex Economy",
    price: "R$ 22.000",
  },
  {
    title: "Guarda Roupa 8 Portas Branco",
    price: "R$ 500",
    tag: "Precisa de Reparo",
  },
  {
    title: "Cama de Casal Ortobom",
    price: "R$ 700",
  },
];
const RecommendationGridItem = () => {
  return (
    <>
      {products.map((product) => (
        <Link w="full" h="200px" marginBottom="24px" _hover={{}}>
          <Box marginBottom="8px">
            <Box w="full" h="120px" bg="cyan.500" borderRadius="8px" />
          </Box>
          <Box>
            {product.tag && (
              <Tag
                size="sm"
                variant="solid"
                bgColor="secondary.orange"
                textDecoration="none"
              >
                {product.tag}
              </Tag>
            )}
            <Text color="text.heading" fontSize="0.875rem">
              {product.title}
            </Text>
            <Text color="text.heading" fontSize="1rem" fontWeight="bold">
              {product.price}
            </Text>
          </Box>
        </Link>
      ))}
    </>
  );
};

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
      </Grid>
    </Flex>
  );
};
