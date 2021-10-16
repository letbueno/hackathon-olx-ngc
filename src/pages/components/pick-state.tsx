import React from "react";
import { Flex, Box, Text, Link } from "@chakra-ui/react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const states = [
  "RJ",
  "SP",
  "MG",
  "PR",
  "RS",
  "SC",
  "ES",
  "BA",
  "PE",
  "DF",
  "CE",
  "MS",
  "GO",
  "AM",
  "RN",
  "PB",
  "PA",
  "MT",
  "AL",
  "SE",
  "MA",
  "AC",
  "RO",
  "TO",
  "PI",
  "AP",
  "RR",
  "BRASIL",
];

export function PickState() {
  return (
    <Flex
      flexDirection="column"
      gridGap="16px"
      width="full"
      padding="24px 16px"
      bg="white"
      maxWidth="1158px"
      marginBottom="64px"
    >
      <Box display="flex" gridGap="16px">
        <HiOutlineLocationMarker size={24} color="#4a4a4a" />
        <Text color="text.heading" fontSize="20px" fontWeight="semibold">
          Escolha o seu estado:
        </Text>
      </Box>

      <Box display="flex" gridGap="8px">
        {states.map((state) => (
          <Link>
            <Text key={state} color="secondary.purple" fontWeight="semibold">
              {state}
            </Text>
          </Link>
        ))}
      </Box>
    </Flex>
  );
}
