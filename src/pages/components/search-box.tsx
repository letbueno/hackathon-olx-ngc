import { Flex, Input } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export function SearchBox() {
  return (
    <Flex
      bg="primary"
      p="4"
      dir="column"
      justify="space-around"
      w="100%"
      align="center"
    >
      <Flex
        position="relative"
        h="60px"
        w="80%"
        borderRadius="4"
        bg="white"
        align="center"
        justifyContent="center"
        p="18px 20px"
      >
        <Input
          border="none"
          _focus={{ outline: "none" }}
          placeholder="Estou procurando por..."
          color="text.description"
          fontSize="1.2rem"
        />
        <FiSearch color="primary" />
      </Flex>
      <Flex></Flex>
    </Flex>
  );
}
