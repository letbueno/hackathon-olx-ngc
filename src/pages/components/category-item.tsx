import { ReactNode, useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";

interface Props {
  label: string;
  children: ReactNode;
  selected: string;
  setSelected: (label: string) => void;
}

export function CategoryItem({
  label,
  children,
  selected,
  setSelected,
}: Props) {
  const [colors, setColors] = useState({ bg: "white", text: "text.heading" });

  const handleSelect = () => {
    if (selected === label) {
      setColors({ bg: "white", text: "text.heading" });
      setSelected("");
    } else {
      setColors({ bg: "primary", text: "white" });
      setSelected(label);
    }
  };

  useEffect(() => {
    if (label !== selected) {
      setColors({ bg: "white", text: "text.heading" });
    }
  }, [label, selected]);

  return (
    <Flex
      cursor="pointer"
      _hover={{
        opacity: "0.9",
      }}
      w={{ sm: "100%", md: "90%", lg: "500px" }}
      p="12px"
      border="1px solid #d2d2d2"
      justify="start"
      alignItems="center"
      onClick={handleSelect}
      bg={colors.bg}
    >
      {children}
      <Text color={colors.text} fontSize="1rem" marginLeft="4px">
        {label}
      </Text>
    </Flex>
  );
}
