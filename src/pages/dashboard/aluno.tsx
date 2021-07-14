import { Flex, Heading } from "@chakra-ui/react";
import { Header } from "../../components/Header";

export default function Aluno() {
  return (
    <Flex direction="column" h="100vh">
      <Header nameProfile="aluno" />

      <Heading>Tela Aluno</Heading>
    </Flex>
  );
}
