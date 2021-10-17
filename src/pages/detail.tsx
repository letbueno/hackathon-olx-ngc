import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Center,
  Tag,
} from "@chakra-ui/react";
import {
  FiChevronRight,
  FiHeart,
  FiShare2,
  FiFlag,
  FiShoppingCart,
} from "react-icons/fi";
import { BsChat } from "react-icons/bs";
import { ShieldIcon } from "../components/icons/shield-icon";
import { PrimaryButton } from "../components/primary-button";
import Menu from "./components/menu";

export default function Detail() {
  return (
    <>
      <Menu />
      <Flex maxWidth="1248px" margin="0 auto" flexDirection="column">
        <Flex gridGap="4px" marginY="4" paddingX="0.75rem" alignItems="center">
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
        <Flex flexDir={["column", "column", "row"]}>
          <Flex
            flexDirection="column"
            gridGap="8px"
            maxWidth="624px"
            width="full"
            padding="4"
          >
            <Heading fontSize="24px">IPHONE 7 32GB TELA QUEBRADA</Heading>
            <Text color="text.description" fontSize="12px">
              Publicado em 16/10 às 23:46 - cód. 945218028
            </Text>

            <Box
              width="full"
              maxWidth="600px"
              height="402px"
              bg="cyan.500"
              borderRadius="8px"
            />
            <Text fontSize="24px" fontWeight="semibold">
              R$ 750
            </Text>
            <Flex alignItems="flex-end" justify="start">
              <Tag
                size="sm"
                variant="solid"
                bgColor="secondary.orange"
                textDecoration="none"
                maxWidth="120px"
                minHeight="24px"
                marginRight="4"
              >
                Precisa de reparo
              </Tag>
              <Text textDecoration="underline" cursor="pointer">
                Ver fotos das avarias
              </Text>
            </Flex>
            <Text marginBottom="16px" maxWidth="610px">
              Caiu no chão e estilhaçou, dificultando o manuseamento do aparelho
            </Text>
            <Flex gridGap="16px" flexWrap="wrap" justify="start">
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
                minWidth="120px"
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
            maxWidth="324px"
            mt="32px"
          >
            <Box padding="10px 0px 10px 8px" bg="primary" borderRadius="8px">
              <Text
                fontSize="36px"
                color="white"
                alignItems="center"
                display="flex"
              >
                <Text as="strong" fontSize="16px" marginRight="4px">
                  R$
                </Text>
                750
              </Text>
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
              <Flex gridGap="8px" flexDirection="column" alignItems="center">
                <PrimaryButton width="max-content">
                  <Center gridGap="8px" width="full">
                    <FiShoppingCart size={24} />
                    <Text fontSize="1rem">Comprar</Text>
                  </Center>
                </PrimaryButton>
                <Button
                  borderRadius="full"
                  borderColor="secondary.orange"
                  borderWidth="1px"
                  borderStyle="solid"
                  color="secondary.orange"
                  fontWeight="regular"
                  width="max-content"
                  href="/buy-repair/:id"
                  bg="rgb(253, 240, 226)"
                  _hover={{
                    background: "rgb(255, 225, 191)",
                  }}
                >
                  <Center gridGap="8px" width="full">
                    <FiShoppingCart size={24} />
                    <Text fontSize="1rem">Comprar + Serviço de Reparo</Text>
                  </Center>
                </Button>
              </Flex>
              <Text fontSize="12px" color="text.heading">
                Último acesso há 24 min
              </Text>
            </Flex>
            <Flex
              border="1px solid #c4c4c4"
              padding="16px 24px"
              borderRadius="8px"
              gridGap="24px"
              alignItems="center"
            >
              <ShieldIcon />
              <Box>
                <Text color="text.heading" fontWeight="semibold">
                  Dicas de segurança
                </Text>
                <Text color="text.heading" fontSize="0.875rem">
                  Não faça pagamentos antes de verificar o que...
                </Text>
                <Text color="primary" fontWeight="semibold">
                  Ver todas as dicas.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
