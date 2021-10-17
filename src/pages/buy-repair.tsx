import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Textarea,
  Center,
  Stack,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { FiClock, FiArrowRight } from "react-icons/fi";
import { PrimaryButton } from "../components/primary-button";
import { MarkerIcon } from "../components/icons/marker-icon";
import { GenericHeader } from "./components/generic-header";

export default function BuyRepairForm() {
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
          Confirme sua compra
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
            <Text fontWeight="semibold" color="text.heading" m="16px 0px">
              Dê uma olhada nos prestadores próximos a você*
            </Text>

            <Flex gridGap="6px" alignItems="center">
              <Center
                flexDirection="column"
                borderWidth="1px"
                borderStyle="solid"
                borderColor="#e5e5e5"
                padding="8px 16px"
                gridGap="12px"
                width="210px"
              >
                <Text
                  fontSize="14px"
                  fontWeight="semibold"
                  color="text.heading"
                >
                  MyCell Consertos
                </Text>
                <Box
                  display="flex"
                  gridGap="8px"
                  alignItems="center"
                  justifyContent="start"
                  width="full"
                >
                  <MarkerIcon />
                  <Text fontSize="14px" color="text.heading">
                    1km de distância
                  </Text>
                </Box>
                <Box
                  display="flex"
                  gridGap="8px"
                  alignItems="center"
                  justifyContent="start"
                  width="full"
                >
                  <FiClock size={24} color="rgb(134, 27, 169)" />
                  <Text fontSize="14px" color="text.heading">
                    Tempo médio: 5 dias
                  </Text>
                </Box>
                <Text
                  fontSize="12px"
                  fontWeight="light"
                  color="text.heading"
                  textDecoration="underline"
                >
                  Ver avaliações
                </Text>
              </Center>
              <FiArrowRight size={24} />
            </Flex>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            maxWidth="452px"
            width="full"
          >
            <Text fontWeight="semibold" color="text.heading" m="16px 0px">
              Entrega
            </Text>
            <RadioGroup>
              <Stack direction="column">
                <Radio value="1">
                  Quero retirar com o prestador de serviço de reparos (combine
                  pelo chat)
                </Radio>
                <Radio value="2">
                  Quero receber na minha casa (Frete: R$ 25,50)
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            maxWidth="452px"
            width="full"
          >
            <Text fontWeight="semibold" color="text.heading" m="16px 0px">
              Forma de Pagamento
            </Text>
          </Box>

          <PrimaryButton
            maxWidth="360px"
            alignSelf="end"
            onClick={goToConfirmationPage}
          >
            Solicite um orçamento
          </PrimaryButton>
        </Flex>
      </Flex>
    </Flex>
  );
}
