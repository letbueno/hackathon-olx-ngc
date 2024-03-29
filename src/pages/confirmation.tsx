import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Center,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import OlxIcon from "../components/icons/olx-icon";
import lottie from "lottie-web";
import checkIcon from "../components/lottie/check.json";

function Header() {
  return (
    <Flex
      bg="white"
      margin="0px auto"
      borderBottom="1px solid #e6e6e6"
      minHeight="100px"
      marginBottom="48px"
    >
      <Flex gridGap="74px" width="full" marginLeft="48px" alignItems="center">
        <OlxIcon />
        <Flex
          alignItems="center"
          gridGap="16px"
          maxWidth="348px"
          display={{ base: "none", md: "inherit" }}
        >
          <Text fontSize="18px" color="text.heading">
            Buscar
          </Text>
          <Text fontSize="18px" color="text.heading">
            Ajuda
          </Text>
          <Text fontSize="18px" color="text.heading">
            Meus Anúncios
          </Text>
          <Text fontSize="18px" color="text.heading">
            Lojas
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default function Confirmation() {
  useEffect(() => {
    const lottieIcon = lottie.loadAnimation({
      container: document.getElementById("check") as Element,
      animationData: checkIcon,
      loop: false,
    });

    return () => lottieIcon.destroy();
  }, []);

  return (
    <>
      <Header />
      <Flex flexDirection="column">
        <Flex
          flexDirection="column"
          maxWidth="1024px"
          margin="0px auto"
          alignItems="center"
          textAlign="center"
          paddingX="6"
        >
          <Flex
            gridGap="24px"
            marginBottom="96px"
            alignItems="center"
            flexDirection={{ base: "column-reverse", md: "row" }}
          >
            <Box id="check" maxWidth="100px" maxHeight="100px" />
            <Heading fontSize="42px" fontWeight="semibold">
              Seu anúncio com solicitação de reparo foi enviada com sucesso!
            </Heading>
          </Flex>
          <Center flexDirection="column" maxWidth="700px">
            <Text
              color="text.heading"
              fontSize="24px"
              fontWeight="bold"
              marginBottom="24px"
            >
              Fique atento aos próximos passos!
            </Text>
            <OrderedList
              gridGap="24px"
              display="flex"
              flexDirection="column"
              mb="4"
            >
              <ListItem>
                O seu anúncio está sendo processado e, quando ele ficar ativo,
                enviaremos um e-mail.
              </ListItem>
              <ListItem>
                Agora os consumidores terão acesso a descrição das avarias de
                seu objeto, podendo optar por realizar manutenção ou não.
              </ListItem>
              <ListItem>
                Caso a sua venda ocorra junto a uma manutenção, você receberá um
                e-mail com as instruções de como prosseguir entrega para o
                prestador de serviço!
              </ListItem>
              <ListItem>
                Não se preocupe, a OLX cuidará do processo inteirinho para você,
                desde o reparo até a conclusão de sua venda {":)"}
              </ListItem>
            </OrderedList>
          </Center>
        </Flex>
      </Flex>
    </>
  );
}
