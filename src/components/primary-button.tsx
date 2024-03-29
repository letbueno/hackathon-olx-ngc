import React from "react";
import { Button, ButtonProps, Center } from "@chakra-ui/react";

export const PrimaryButton: React.FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Button
      color="white"
      bg="secondary.orange"
      height="40px"
      borderRadius="full"
      w="full"
      fontSize="0.875rem"
      fontWeight="bold"
      _hover={{ background: "rgb(227, 118, 0)" }}
      {...rest}
    >
      <Center>{children}</Center>
    </Button>
  );
};
