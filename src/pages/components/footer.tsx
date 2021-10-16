import React from "react";
import { Center, Box, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Center borderTopWidth="1px">
      <Box>
        <Center>
          <Text>Ajuda e contato</Text>
          <Text>Dicas de segurança</Text>
          <Text>Vender na OLX</Text>
          <Text>Plano Profissional</Text>
        </Center>
        <Box></Box>
      </Box>
      <Box></Box>
    </Center>
  );
}
