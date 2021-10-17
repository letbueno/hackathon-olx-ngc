import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Box, Flex, Link, Spacer, HStack, Text } from "@chakra-ui/layout";
import styled from "styled-components";

import React from "react";
import {
  FiGrid,
  FiMessageCircle,
  FiBriefcase,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import OlxIcon from "../../components/icons/olx-icon";

const TextStyle = styled(Text)`
  margin: 0 8px;
`;

export const Menu = () => {
  return (
    <Flex h="80px" maxWidth="1272px" margin="0 auto">
      <Box display="flex" justifyContent="center" alignItems="center">
        <HStack spacing={12} paddingLeft="4">
          <Link to="/">
            <OlxIcon />
          </Link>
          <TextStyle p color="text.heading" fontSize="0.875rem">
            Buscar
          </TextStyle>
        </HStack>
      </Box>
      <Spacer />
      <Flex display={["none", "none", "flex"]}>
        <Box p="4" display="flex" justifyContent="center" alignItems="center">
          <FiBriefcase color="#4f4f4f" size={24} />
          <TextStyle color="text.heading" fontSize="0.875rem">
            Plano Profissional
          </TextStyle>
        </Box>
        <Box p="4" display="flex" justifyContent="center" alignItems="center">
          <FiGrid size={24} color="#4f4f4f" />
          <TextStyle color="text.heading" fontSize="0.875rem">
            Meus Anúncios
          </TextStyle>
        </Box>
        <Box p="4" display="flex" justifyContent="center" alignItems="center">
          <FiMessageCircle size={24} color="#4f4f4f" />
          <TextStyle color="text.heading" fontSize="0.875rem">
            Chat
          </TextStyle>
        </Box>
        <Box p="4" display="flex" justifyContent="center" alignItems="center">
          <FiBell size={24} color="#4f4f4f" />
          <TextStyle color="text.heading" fontSize="0.875rem">
            Notificações
          </TextStyle>
        </Box>
        <Box p="4" display="flex" justifyContent="center" alignItems="center">
          <Avatar size="sm" src="https://bit.ly/dan-abramov" />
          <TextStyle color="text.heading" fontSize="0.875rem">
            Dan Abramov
          </TextStyle>
          <HStack spacing={8}>
            <FiChevronDown size={12} color="#4f4f4f" />
          </HStack>
        </Box>
      </Flex>
      <Flex alignItems="center" paddingRight="4">
        <Button
          as="a"
          href="/form"
          borderRadius="30px"
          color="white"
          bgColor="secondary.orange"
          _focus={{
            border: "none",
          }}
        >
          Anunciar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Menu;
