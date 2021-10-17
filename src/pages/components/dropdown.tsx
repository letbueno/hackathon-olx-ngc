import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";

type DropdownItemProps = {
  title: string;
  icon: () => JSX.Element;
};

function DropdownItem(props: DropdownItemProps) {
  const { icon: Icon, title } = props;
  return (
    <Box display="flex" alignItems="center" gridGap="8px">
      <Icon />
      <Text>{title}</Text>
      <FiChevronRight />
    </Box>
  );
}

export function Dropdown() {
  return (
    <Box display="flex" flexDirection="column" gridGap="16px">
      <DropdownItem title="Eletrônicos" icon={() => <div />} />
      <DropdownItem title="Eletrodomésticos" icon={() => <div />} />
      <DropdownItem title="Marcenaria" icon={() => <div />} />
      <DropdownItem title="Reparo de Móveis" icon={() => <div />} />
      <DropdownItem title="Costureira" icon={() => <div />} />
      <DropdownItem title="Mecânico" icon={() => <div />} />
    </Box>
  );
}
