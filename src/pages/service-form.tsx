import React from "react";
import { Box, Flex, Heading, Text, Textarea, Center } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { FiClock, FiArrowRight } from "react-icons/fi";
import { PrimaryButton } from "../components/primary-button";
import { MarkerIcon } from "../components/icons/marker-icon";
import { GenericHeader } from "./components/generic-header";

export default function ServiceForm() {
  const history = useHistory();

  const goToConfirmationPage = () => history.push("/confirmation");

  return (
    <Flex flexDirection="column">
      <GenericHeader />
      <Flex
        flexDirection="column"
        maxWidth="1300px"
        margin="0px auto"
        gridGap="24px"
        paddingX="6"
      >
        <Heading
          fontSize="32px"
          fontWeight="bold"
          color="text.heading"
          alignSelf="center"
          m="32px 0 16px 0"
        >
          Nos conte sobre a reparação do seu objeto
        </Heading>
        <Flex
          flexDirection="column"
          padding="16px 24px"
          border={{ base: "none", md: "1px solid #c4c4c4" }}
          borderRadius="4"
          gridGap="32px"
        >
          <Text fontSize="16px" color="text.heading" maxWidth="695px">
            Nessa etapa do processo, certifique-se de especificar todas as
            avarias do objeto, dessa forma o consumidor fará uma compra mais
            consiente!
          </Text>
          <Box
            display="flex"
            flexDirection="column"
            maxWidth="452px"
            width="full"
          >
            <Text
              fontWeight="semibold"
              color="text.heading"
              marginBottom="16px"
            >
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
            <Text color="text.description" marginBottom="16px">
              Adicione até
              <Text as="strong" color="text.heading" marginLeft="4px">
                6 fotos
              </Text>
            </Text>
            <Center
              borderWidth="1px"
              borderStyle="dashed"
              borderColor="secondary.purple"
              display="flex"
              flexDirection="column"
              gridGap="4px"
              maxWidth="192px"
              padding="16px 4px"
              cursor="pointer"
            >
              <FaCamera size={48} color="rgb(134, 27, 169)" />
              <Text fontSize="18px" color="secondary.purple" fontWeight="bold">
                Adicionar Fotos
              </Text>
              <Text fontSize="14px" color="secondary.purple">
                JPG, GIF e PNG somente
              </Text>
            </Center>
          </Box>

          <PrimaryButton
            maxWidth="360px"
            alignSelf="end"
            onClick={goToConfirmationPage}
          >
            Confirmar solicitação
          </PrimaryButton>
        </Flex>
      </Flex>
    </Flex>
  );
}
