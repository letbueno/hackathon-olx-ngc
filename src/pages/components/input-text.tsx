import { Input } from "@chakra-ui/react";

interface Props {
  heigth: string;
  placeholder: string;
}

export function InputText({ heigth, placeholder }: Props) {
  return (
    <Input
      placeholder={placeholder}
      required
      border="1px solid #C4C4C4"
      p="4"
      fontSize="1rem"
      w="100%"
      maxW="500px"
      h={heigth}
      margin="8px 0"
    />
  );
}
