import { Flex, Text, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  label: string;
  children: ReactNode;
}

export default function SearchInfo({ label, children }: Props) {
  return (
    <Flex alignItems="center" justify="center" dir="column">
      <Box as="span" bg="white" borderRadius="100%">
        {children}
      </Box>
      <Text>{label}</Text>
    </Flex>
  );
}
