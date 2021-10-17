import { Flex, Box, Text } from "@chakra-ui/react";
import OlxIcon from "../../components/icons/olx-icon";

export function GenericHeader() {
  return (
    <Flex
      as="header"
      w="100%"
      p="24px"
      justify="center"
      margin="auto"
      borderBottom="0.5px solid #c4c4c4"
    >
      <Box display="flex" w="90%" justifyContent="space-between">
        <OlxIcon />
        <Flex
          bg="secondary.lightPurple"
          borderRadius="100px"
          w="150px"
          alignItems="center"
          justify="center"
        >
          <Text fontSize="xs">
            <strong>Olá,</strong> Dan Ambrov!
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
