import React from "react";
import { Box, Flex, Heading, Text, Textarea } from "@chakra-ui/react";

export default function ServiceForm() {
  return (
    <Flex
      flexDirection="column"
      maxWidth="1300px"
      margin="0px auto"
      gridGap="48px"
    >
      <Heading
        fontSize="32px"
        fontWeight="bold"
        color="text.heading"
        alignSelf="center"
        marginBottom="48px"
      >
        Nos conte sobre a reparação do seu objeto
      </Heading>
      <Flex
        flexDirection="column"
        padding="16px 24px"
        border="1px solid #c4c4c4"
        borderRadius="4"
        gridGap="32px"
      >
        <Text fontSize="20px" color="text.heading" maxWidth="695px">
          Nessa etapa do processo, vamos verificar se existem prestadores de
          serviço próximos a você!
        </Text>

        <Box
          display="flex"
          flexDirection="column"
          maxWidth="452px"
          width="full"
        >
          <Text fontWeight="semibold" color="text.heading" marginBottom="16px">
            Descreva detalhadamente os reparos que precisam ser feitos em seu
            objeto*
          </Text>
          <Textarea
            border="1px solid #c4c4c4"
            placeholder="Escreva aqui..."
            minHeight="240px"
            borderRadius="4px"
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          maxWidth="452px"
          width="full"
        >
          <Text fontWeight="semibold" color="text.heading">
            Fotos do defeito
          </Text>
          <Text color="text.description">
            Adicione até
            <Text as="strong" color="text.heading">
              6 fotos
            </Text>
          </Text>
          <Box
            border="1px dashed secondary.purple"
            display="flex"
            flexDirection="column"
          >
            <Text color="secondary.purple">Adicionar Fotos </Text>
            <Text color="secondary.purple">JPG, GIF e PNG somente </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
