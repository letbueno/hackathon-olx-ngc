import React from "react";
import { Link, Box, Text, Flex } from "@chakra-ui/react";
import { PremiumIcon } from "../../components/icons/premium-icon";

const productsPremium = [
  {
    title: "FIAT ARGO DRIVE 1.0 2020",
    price: "R$ 53.900",
  },
  {
    title: "Scania 420 2008",
    price: "R$ 150.000",
  },
  {
    title: "Violão Elétrico",
    price: "R$ 1.000",
  },
  {
    title: "Maquina de Bordar JANOME 350E",
    price: "R$ 2.000",
  },
  {
    title: "Guarda Roupa 8 Portas Branco",
    price: "R$ 500",
  },
  {
    title: "Cama de Casal Ortobom",
    price: "R$ 700",
  },
];

function PremiumGalleryItem() {
  return (
    <>
      {productsPremium.map((product) => (
        <Link
          w="full"
          h="200px"
          textDecoration="none"
          marginBottom="32px;"
          _hover={{}}
        >
          <Box marginBottom="8px">
            <Box w="full" h="160px" bg="cyan.500" borderRadius="8px" />
          </Box>
          <Box>
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
}

export function PremiumGallery() {
  return (
    <Flex
      flexDirection="column"
      gridGap="24px"
      width="full"
      marginTop="32px"
      padding="24px 16px"
      maxWidth="1158px"
    >
      <Flex gridGap="16px">
        <PremiumIcon />
        <Text color="text.heading" fontSize="20px" fontWeight="semibold">
          Galeria Premium
        </Text>
      </Flex>

      <Flex gridGap="24px" width="full">
        <PremiumGalleryItem />
      </Flex>
    </Flex>
  );
}
