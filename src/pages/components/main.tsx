import React from "react";
import { Box, Flex, Heading, Link, Text, Grid } from "@chakra-ui/react";
import { RecommendationGrid } from "./recommendation-grid";
import { PremiumGallery } from "./premium-gallery";
import { PickState } from "./pick-state";
import { PrimaryButton } from "../../components/primary-button";

const popularSearches = [
  "motorola g7 plus",
  "máquina de lavar",
  "ar condicionado portátil",
  "geladeira frost free",
  "notebooks samsung",
  "sapatos femininos",
  "adidas superstar",
  "camisetas masculinas",
  "piano eletrônico",
  "bicicleta infantil sem pedais",
];

export function Main() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      paddingX="4"
      bg="background"
      margin="0px auto"
      alignItems="center"
    >
      <RecommendationGrid />
      <PremiumGallery />
      <PickState />

      <Flex
        flexDirection="column"
        gridGap="16px"
        maxWidth="1158px"
        width="full"
        marginBottom="32px"
      >
        <Heading
          as="h2"
          fontSize="20px"
          fontWeight="semibold"
          color="text.heading"
        >
          Descubra
        </Heading>

        <Grid gridTemplateColumns="repeat(4, 1fr)" height="396px" gridGap="2px">
          <Box bg="cyan.500" height="full" />
          <Box display="flex" flexDirection="column" gridGap="2px">
            <Box bg="cyan.500" height="full" />
            <Box bg="cyan.500" height="full" maxHeight="176px" />
          </Box>
          <Box display="flex" flexDirection="column" gridGap="2px">
            <Box bg="cyan.500" height="full" maxHeight="176px" />
            <Box bg="cyan.500" height="full" />
          </Box>
          <Box display="flex" flexDirection="column" gridGap="2px">
            <Box bg="cyan.500" height="full" />
            <Box bg="cyan.500" height="full" maxHeight="176px" />
          </Box>
        </Grid>
      </Flex>

      <Flex
        flexDirection="column"
        gridGap="16px"
        maxWidth="1158px"
        width="full"
        marginBottom="32px"
      >
        <Heading
          as="h2"
          fontSize="24px"
          fontWeight="semibold"
          color="text.heading"
        >
          Sobre a OLX
        </Heading>

        <Box display="flex" gridGap="16px">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="start"
            gridGap="10px"
            bgImage="url(https://s3.amazonaws.com/static.olx.com.br/cfg/images/home/banner.png)"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="100% 0"
            borderRadius="4px"
            padding="36px 24px 32px"
            minHeight="186px"
            width="full"
          >
            <Text fontSize="20px" color="white">
              Vamos juntos impulsionar o seu negócio?
            </Text>
            <Text
              fontSize="0.875rem"
              color="white"
              fontWeight="light"
              maxWidth="400px"
            >
              Conheça o novo blog da OLX sobre o mercado de automóveis para você
              acelerar ainda mais o seu negócio.
            </Text>
            <PrimaryButton height="32px" maxWidth="120px">
              Acesse
            </PrimaryButton>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="start"
            gridGap="10px"
            bgImage="url(https://s3.amazonaws.com/static.olx.com.br/cfg/images/home/banner.png)"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="100% 0"
            borderRadius="4px"
            padding="36px 24px 32px"
            minHeight="186px"
            width="full"
          >
            <Text fontSize="20px" color="white">
              Vamos juntos impulsionar o seu negócio?
            </Text>
            <Text
              fontSize="0.875rem"
              color="white"
              fontWeight="light"
              maxWidth="380px"
            >
              Conheça o novo blog da OLX sobre o mercado de automóveis para você
              acelerar ainda mais o seu negócio.
            </Text>
            <PrimaryButton height="32px" maxWidth="120px">
              Acesse
            </PrimaryButton>
          </Box>
        </Box>
      </Flex>

      <Flex flexDirection="column" gridGap="16px" maxWidth="1158px">
        <Heading
          as="h2"
          fontSize="20px"
          fontWeight="semibold"
          color="text.heading"
        >
          Pesquisas populares
        </Heading>

        <Box display="flex" gridGap="8px" flexWrap="wrap">
          {popularSearches.map((popularSearch) => (
            <Link
              padding="4px 16px"
              border="1px solid #999"
              borderRadius="full"
              color="text.heading"
              key={popularSearch}
              _hover={{
                borderColor: "secondary.purple",
                color: "secondary.purple",
              }}
            >
              {popularSearch}
            </Link>
          ))}
        </Box>
      </Flex>
    </Box>
  );
}
