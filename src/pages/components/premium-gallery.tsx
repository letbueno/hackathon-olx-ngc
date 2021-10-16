import React from "react";
import { Link, Box, Text, Flex } from "@chakra-ui/react";
import { PremiumIcon } from "../../components/icons/premium-icon";

function PremiumGalleryItem() {
  return (
    <Link w="full" h="200px" textDecoration="none">
      <Box marginBottom="8px">
        <Box w="full" h="160px" bg="cyan.500" borderRadius="8px" />
      </Box>
      <Box>
        <Text color="text.heading" fontSize="0.875rem">
          Suzuki gsx r 750
        </Text>
        <Text color="text.heading" fontSize="1rem" fontWeight="bold">
          R$ 30.000
        </Text>
      </Box>
    </Link>
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
        <PremiumGalleryItem />
        <PremiumGalleryItem />
        <PremiumGalleryItem />
        <PremiumGalleryItem />
      </Flex>
    </Flex>
  );
}
