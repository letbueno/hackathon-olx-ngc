import { Flex, Box, Heading, Text, Button, Center } from "@chakra-ui/react";
import { FiChevronRight, FiHeart, FiShare2, FiFlag } from "react-icons/fi";
import { BsChat } from "react-icons/bs";
import { ShieldIcon } from "../components/icons/shield-icon";
import { PrimaryButton } from "../components/primary-button";
import Menu from "./components/menu";

export default function Detail() {
  return (
    <>
      <Menu />
      <Flex maxWidth="1248px" margin="0 auto" flexDirection="column">
        <Flex gridGap="4px" marginY="4" paddingX="0.75rem">
          <Text fontSize="12px" color="text.heading">
            Rio Grande do Norte
          </Text>
          <FiChevronRight size={12} color="#4d4d4d" />
          <Text fontSize="12px" color="text.heading">
            Equipamentos e mobiliário
          </Text>
          <FiChevronRight size={12} color="#4d4d4d" />
          <Text fontSize="12px" color="text.heading">
            Natal
          </Text>
          <FiChevronRight size={12} color="#4d4d4d" />
          <Text fontSize="12px" color="text.heading">
            Nossa Senhora da Apresentação
          </Text>
        </Flex>
        <Flex>
          <Flex
            flexDirection="column"
            gridGap="8px"
            maxWidth="624px"
            padding="4"
          >
            <Heading fontSize="24px">
              Notebook Lenovo IdeaPad 320-15IKB, Intel Core i5 7200U, 20 gb RAM,
            </Heading>
            <Text color="text.description" fontSize="12px">
              Publicado em 16/10 às 23:46 - cód. 944812028
            </Text>

            <Box
              width="full"
              maxWidth="600px"
              height="402px"
              bg="cyan.500"
              borderRadius="8px"
            />

            <Text fontSize="24px" fontWeight="semibold">
              R$ 2.200
            </Text>
            <Text marginBottom="16px" maxWidth="610px">
              Peguei em divida do lugar que eu trabalhava, perfeitas condições,
              sem marcar de uso. Acompanha windows 11
            </Text>
            <Flex gridGap="16px">
              <Button
                borderRadius="full"
                borderColor="secondary.orange"
                borderWidth="1px"
                borderStyle="solid"
                color="secondary.orange"
                fontWeight="regular"
                bg="white"
                _hover={{
                  background: "secondary.orange",
                  color: "white",
                }}
              >
                <Center gridGap="8px">
                  <FiHeart size={24} />
                  <Text fontSize="1rem">Favoritar</Text>
                </Center>
              </Button>
              <Button
                borderRadius="full"
                borderColor="secondary.orange"
                borderWidth="1px"
                borderStyle="solid"
                color="secondary.orange"
                fontWeight="regular"
                bg="white"
                _hover={{
                  background: "secondary.orange",
                  color: "white",
                }}
              >
                <Center gridGap="8px">
                  <FiShare2 size={24} />
                  <Text fontSize="1rem">Compartilhar</Text>
                </Center>
              </Button>
              <Button
                borderRadius="full"
                borderColor="secondary.orange"
                borderWidth="1px"
                borderStyle="solid"
                color="secondary.orange"
                fontWeight="regular"
                bg="white"
                _hover={{
                  background: "secondary.orange",
                  color: "white",
                }}
              >
                <Center gridGap="8px">
                  <FiFlag size={24} />
                  <Text fontSize="1rem">Denunciar</Text>
                </Center>
              </Button>
            </Flex>
          </Flex>
          <Flex
            flexDirection="column"
            gridGap="16px"
            padding="4"
            maxWidth="288px"
          >
            <Box
              padding="10px 0px 10px 8px"
              bg="primary"
              color="white"
              fontSize="36px"
              borderRadius="8px"
            >
              R$ 2.200
            </Box>
            <Flex
              flexDirection="column"
              border="1px solid #c4c4c4"
              padding="16px 24px"
              borderRadius="8px"
              marginBottom="8px"
              gridGap="16px"
              alignItems="center"
            >
              <Text fontSize="20px" color="text.heading" fontWeight="semibold">
                Rhuan D.
              </Text>
              <PrimaryButton>
                <Center gridGap="8px">
                  <BsChat size={24} />
                  <Text fontSize="1rem">Chat</Text>
                </Center>
              </PrimaryButton>
              <Text fontSize="12px" color="text.heading">
                Último acesso há 24 min
              </Text>
            </Flex>
            <Flex
              border="1px solid #c4c4c4"
              padding="16px 24px"
              borderRadius="8px"
              gridGap="24px"
            >
              <ShieldIcon />
              <Box>
                <Text color="text.heading" fontWeight="semibold">
                  Dicas de segurança
                </Text>
                <Text color="text.heading" fontSize="0.875rem">
                  Não faça pagamentos antes de verificar o que
                </Text>
                <Text color="primary">Ver todas as dicas.</Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
