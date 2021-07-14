import { Flex, Heading } from "@chakra-ui/react";
import { Header } from "../../components/Header";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header nameProfile="admin" />

      <Heading>Tela Admin</Heading>
    </Flex>

  );
}
