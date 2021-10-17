import {
  Flex,
  Box,
  Text,
  Heading,
  Input,
  HStack,
  VStack,
  Button,
  Checkbox,
  useNumberInput,
} from "@chakra-ui/react";
import { useState } from "react";
import { InputText } from "./components/input-text";
import { CategoryItem } from "./components/category-item";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { GenericHeader } from "./components/generic-header";
import { categories } from "../constants/announce-categorys";
import { AiOutlineInfoCircle, AiOutlineSkin } from "react-icons/ai";
import { useHistory } from "react-router-dom";

export default function Form() {
  const [selected, setSelected] = useState("");
  const [reparationNeed, setReparationNeed] = useState(false);
  const history = useHistory();
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 30,
      precision: 0,
    });

  const handleReparation = () => {
    setReparationNeed(!reparationNeed);
  };

  const goNextPage = () => {
    if (reparationNeed) {
      history.push("service-form");
    } else {
      history.push("/detail/:id");
    }
  };

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ readOnly: true });

  return (
    <Flex w="100%" direction="column" pb="4">
      <GenericHeader />
      <Flex
        direction="column"
        justify="center"
        alignItems="center"
        p="0px 22px"
        m="32px 0 16px 0"
      >
        <Heading
          color="text.heading"
          fontWeight="bold"
          textAlign="center"
          margin="25px 0"
        >
          O que você está anunciando?
        </Heading>
        <Flex
          as="form"
          direction="column"
          justify={{ sm: "center", md: "start" }}
          padding="24px"
          w="90%"
          border={{ sm: "none", md: "1px solid #C4C4C4" }}
        >
          <InputText heigth="60px" placeholder="Título*" />
          <InputText heigth="120px" placeholder="Descrição*" />
          <VStack spacing={8} direction="column" alignItems="start" mt="4">
            <Box>
              <Text fontWeight="bold" color="text.heading">
                Categorias*
              </Text>
              <Flex
                border="1px solid #d2d2d2"
                maxW="500px"
                borderRadius="4px"
                direction="column"
                mt="8px"
              >
                {categories.map(({ label, icon: Icon }) => (
                  <CategoryItem
                    key={label}
                    label={label}
                    setSelected={setSelected}
                    selected={selected}
                  >
                    <Icon color="primary" />
                  </CategoryItem>
                ))}
              </Flex>
              {selected === "Serviços" && (
                <Flex
                  direction="column"
                  justify={{ sm: "center", md: "start" }}
                  padding="24px"
                  maxW={{ sm: "90%", md: "500px" }}
                >
                  <Text fontWeight="bold" color="text.heading" mt="4">
                    Tempo médio do serviço (em dias)*
                  </Text>
                  <HStack maxW="320px">
                    <Button {...dec}>-</Button>
                    <Input {...input} />
                    <Button {...inc}>+</Button>
                  </HStack>
                  <Text fontWeight="bold" color="text.heading" mt="4">
                    Tipo de seu serviço*
                  </Text>
                  <VStack
                    spacing={2}
                    direction="column"
                    alignItems="start"
                    mt="4"
                  >
                    <Checkbox size="lg" colorScheme="blue">
                      Eletrônicos/Informática
                    </Checkbox>
                    <Checkbox size="lg" colorScheme="blue" defaultIsChecked>
                      Roupas/Téxtil
                    </Checkbox>
                    <Checkbox size="lg" colorScheme="blue" defaultIsChecked>
                      Mecânico
                    </Checkbox>
                    <Checkbox size="lg" colorScheme="blue" defaultIsChecked>
                      Elétrico
                    </Checkbox>
                    <Checkbox size="lg" colorScheme="blue" defaultIsChecked>
                      Doméstico
                    </Checkbox>
                    <Checkbox size="lg" colorScheme="blue" defaultIsChecked>
                      Outro
                    </Checkbox>
                  </VStack>
                </Flex>
              )}
            </Box>
            <Box>
              <Text fontSize="16px" fontWeight="bold" color="text.heading">
                Localização
              </Text>
              <InputText heigth="60px" placeholder="CEP*" />
            </Box>
            <Box>
              <Text fontSize="16px" fontWeight="bold" color="text.heading">
                Contato
              </Text>
              <HStack spacing={2}>
                <FaPhoneSquareAlt size={20} color="#6E0AD6" />
                <Text>21 *****-*****</Text>
              </HStack>
            </Box>
          </VStack>
          <VStack spacing={8} direction="column" alignItems="start" mt="4">
            <Box>
              <Checkbox size="md" colorScheme="blue">
                <Text fontWeight="bold" color="text.heading">
                  Ocultar meu telefone neste anúncio
                </Text>
              </Checkbox>
            </Box>

            {selected !== "Serviços" && (
              <VStack spacing={4} direction="column" alignItems="start" mt="4">
                <Checkbox
                  size="md"
                  colorScheme="blue"
                  onChange={handleReparation}
                >
                  <Text fontWeight="bold" color="text.heading">
                    Seu objeto necessita de serviço de reparos?
                  </Text>
                </Checkbox>
                <Flex>
                  <Box display="flex">
                    <AiOutlineInfoCircle color="#d2d2d2" />
                    <Text
                      fontSize="1rem"
                      color="text.description"
                      maxW="500px"
                      marginLeft="4px"
                    >
                      Essa funcionalidade permite que você desapegue de objetos
                      que precisam de reparos/conserto/reforma de maneira
                      descomplicada.
                    </Text>
                  </Box>
                </Flex>
              </VStack>
            )}
          </VStack>
        </Flex>
        <Flex w="90%" justifyContent="space-between" margin="32px 0 ">
          <Text>
            Ao publicar você concorda e aceita nossos Termos de Uso e
            Privacidade
          </Text>
          <Button
            as="a"
            bg="secondary.orange"
            borderRadius="30px"
            p="24px"
            w="320px"
            color="white"
            maxW="300px"
            cursor="pointer"
            opacity="0.9"
            _hover={{
              opacity: 3,
            }}
            onClick={goNextPage}
          >
            {reparationNeed
              ? "Ir para descrição dos reparos"
              : "Enviar Anúncio"}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
