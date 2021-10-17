import React from "react";
import { Center, Box, Text } from "@chakra-ui/react";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";

export function Footer() {
  return (
    <Box
      display="flex"
      borderTopWidth="1px"
      padding="24px"
      maxWidth="1094px"
      margin="0px auto"
      flexDirection="column"
      marginTop="48px"
      gridGap="60px"
    >
      <Box display="flex" justifyContent="space-between" width="full">
        <Center gridGap="32px">
          <Text color="text.heading" fontSize="0.875rem" fontWeight="semibold">
            Ajuda e contato
          </Text>
          <Text color="text.heading" fontSize="0.875rem" fontWeight="semibold">
            Dicas de segurança
          </Text>
          <Text color="text.heading" fontSize="0.875rem" fontWeight="semibold">
            Vender na OLX
          </Text>
          <Text color="text.heading" fontSize="0.875rem" fontWeight="semibold">
            Plano Profissional
          </Text>
        </Center>
        <Box display="flex" gridGap="16px">
          <FiFacebook size={24} color="#4d4d4d" />
          <FiYoutube size={24} color="#4d4d4d" />
          <FiLinkedin size={24} color="#4d4d4d" />
          <FiInstagram size={24} color="#4d4d4d" />
          <FiTwitter size={24} color="#4d4d4d" />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        gridGap="4px"
      >
        <Text display="flex" gridGap="4px" fontSize="12px" color="text.heading">
          <Text as="strong" textDecoration="underline" color="text.heading">
            Sobre a OLX,
          </Text>
          <Text as="strong" textDecoration="underline" color="text.heading">
            Termos de uso,
          </Text>
          <Text as="strong" textDecoration="underline" color="text.heading">
            Política de privacidade
          </Text>
          e
          <Text as="strong" textDecoration="underline" color="text.heading">
            Proteção à Propriedade Intelectual
          </Text>
        </Text>
        <Text fontSize="12px" color="text.heading">
          © Bom Negócio Atividades de Internet Ltda. Rua do Catete, 359,
          Flamengo - 22220-001 - Rio de Janeiro, RJ
        </Text>
      </Box>
    </Box>
  );
}
