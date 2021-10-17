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
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import OlxIcon from "../components/icons/olx-icon";
import { InputText } from "./components/input-text";
import { CategoryItem } from "./components/category-item";
import { FiTv, FiDribbble } from "react-icons/fi";
import { GrCar } from "react-icons/gr";
import { AiOutlineTool, AiOutlineInfoCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";

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
        justify="space-between"
        margin="auto"
        borderBottom="0.5px solid #c4c4c4"
      >
        <OlxIcon />
        <Flex
          bg="secondary.lightPurple"
          borderRadius="100px"
          w="150px"
          alignItems="center"
          justify="center"
        >
          <Text>
            <strong>Olá,</strong> Dan Ambrov!
          </Text>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        alignItems="center"
        p="0px 22px"
      >
        <Text
          textAlign="justify"
          maxW={{ sm: "90%", md: "80%", lg: "60%" }}
          alignSelf="flex-start"
          p="16px 0"
          padding="24px 32px"
        >
          Anuncie grátis na OLX! Aqui você pode fazer até 40 anúncios grátis por
          mês, dependendo da categoria. Saiba mais na nossa Central de Ajuda.
        </Text>
        <Heading color="text.heading" textAlign="center" margin="25px 0 4px">
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
              label="Eletrônicos"
              setSelected={setSelected}
              selected={selected}
            >
              <FiTv color="primary" />
            </CategoryItem>
            <CategoryItem
              label="Esportes e Lazer"
              setSelected={setSelected}
              selected={selected}
            >
              <FiDribbble color="primary" />
            </CategoryItem>
            <CategoryItem
              label="Auto e peças"
              setSelected={setSelected}
              selected={selected}
            >
              <GrCar color="primary" />
            </CategoryItem>
            <CategoryItem
              label="Serviços"
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
              <Input heigth="60px" placeholder="Tempo médio de seus serviços" />
              <Text fontWeight="bold" color="text.heading" mt="4">
                Tipo de seu serviço*
              </Text>
              <VStack spacing={2} direction="column" alignItems="start" mt="4">
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
          {selected !== "Serviços" && (
            <VStack spacing={2} direction="column" alignItems="start" mt="4">
              <Checkbox
                size="lg"
                colorScheme="blue"
                onChange={handleReparation}
              >
                Seu objeto necessita de serviço de restauração?
              </Checkbox>
              <Flex alignItems="center">
                <AiOutlineInfoCircle color="#d2d2d2" />
                <Text
                  fontSize="1rem"
                  color="text.description"
                  maxW="500px"
                  marginLeft="4px"
                >
                  Essa funcionalidade permite que você desapegue de objetos que
                  precisam de reparos/conserto/reforma de maneira descomplicada.
                </Text>
              </Flex>
            </VStack>
          )}
          <Button
            as="a"
            bg="secondary.orange"
            color="white"
            maxW="300px"
            alignSelf="flex-end"
            cursor="pointer"
            opacity="0.9"
            _hover={{
              opacity: 1,
            }}
            onClick={goNextPage}
          >
            {reparationNeed
              ? "Ir para descrição dos reparos"
              : "Publicar anúncio"}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
