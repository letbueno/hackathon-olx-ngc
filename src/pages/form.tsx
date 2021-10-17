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
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import OlxIcon from "../components/icons/olx-icon";
import { InputText } from "./components/input-text";
import { CategoryItem } from "./components/category-item";
import { FiTv, FiSmartphone } from "react-icons/fi";
import { BiBed, BiBasketball } from "react-icons/bi";
import { GrCar } from "react-icons/gr";
import { AiOutlineTool, AiOutlineInfoCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { IoPawOutline } from "react-icons/io5";
import { FaPhoneSquareAlt, FaGuitar, FaBabyCarriage } from "react-icons/fa";
export default function Form() {
  const [selected, setSelected] = useState("");
  const [reparationNeed, setReparationNeed] = useState(false);
  const history = useHistory();

  const handleReparation = () => {
    setReparationNeed(!reparationNeed);
  };

  const goNextPage = () => {
    if (selected) {
      history.push("service-form");
    } else {
      history.push("/");
    }
  };

  return (
    <Flex w="100%" direction="column">
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
      <Flex
        direction="column"
        justify="center"
        alignItems="center"
        p="0px 22px"
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
                <CategoryItem
                  label="Imóveis"
                  setSelected={setSelected}
                  selected={selected}
                >
                  <FiTv color="primary" />
                </CategoryItem>
                <CategoryItem
                  label="Auto e peças"
                  setSelected={setSelected}
                  selected={selected}
                >
                  <GrCar color="primary" />
                </CategoryItem>
                <CategoryItem
                  label="Para a sua casa"
                  setSelected={setSelected}
                  selected={selected}
                >
                  <BiBed color="primary" />
                </CategoryItem>
                <CategoryItem
                  label="Eletrônicos e celulares"
                  setSelected={setSelected}
                  selected={selected}
                >
                  <FiSmartphone color="primary" />
                </CategoryItem>
                <CategoryItem
                  label="Música e hobbies"
                  setSelected={setSelected}
                  selected={selected}
                >
                  <FaGuitar color="primary" />
                </CategoryItem>
                <CategoryItem
                  label="Esportes e Lazer"
                  setSelected={setSelected}
                  selected={selected}
                >
                  <BiBasketball color="primary" />
                </CategoryItem>
                <CategoryItem
                  label="Artigos infantis"
                  setSelected={setSelected}
                  selected={selected}
                >
                  <FaBabyCarriage color="primary" />
                </CategoryItem>
                <CategoryItem
                  label="Animais de estimação"
                  setSelected={setSelected}
                  selected={selected}
                >
                  <IoPawOutline color="primary" />
                </CategoryItem>
                <CategoryItem
                  label="Moda e beleza"
                  setSelected={setSelected}
                  selected={selected}
                >
                  <AiOutlineTool color="primary" />
                </CategoryItem>
                <CategoryItem
                  label="Agro e indústria"
                  setSelected={setSelected}
                  selected={selected}
                >
                  <AiOutlineTool color="primary" />
                </CategoryItem>
                <CategoryItem
                  label="Comércio e escritório"
                  setSelected={setSelected}
                  selected={selected}
                >
                  <AiOutlineTool color="primary" />
                </CategoryItem>
                <CategoryItem
                  label="Serviços"
                  setSelected={setSelected}
                  selected={selected}
                >
                  <AiOutlineTool color="primary" />
                </CategoryItem>
                <CategoryItem
                  label="Vagas de emprego"
                  setSelected={setSelected}
                  selected={selected}
                >
                  <AiOutlineTool color="primary" />
                </CategoryItem>
              </Flex>
              {selected === "Serviços" && (
                <Flex
                  direction="column"
                  justify={{ sm: "center", md: "start" }}
                  padding="24px"
                  maxW={{ sm: "90%", md: "500px" }}
                >
                  <Input
                    heigth="60px"
                    placeholder="Tempo médio de seus serviços"
                  />
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
              <Checkbox
                size="md"
                colorScheme="blue"
                onChange={handleReparation}
              >
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
                    Seu objeto necessita de serviço de restauração?
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
