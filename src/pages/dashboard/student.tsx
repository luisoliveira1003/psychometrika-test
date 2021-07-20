import { Box, Flex, Heading, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { Header } from "../../components/Header";
import ListBook from "../../components/ListBook";

export default function Aluno() {
  return (
    <Flex direction="column" h="100vh">
      <Header nameProfile="aluno" />

      <VStack
        divider={<StackDivider borderColor="gray.300" opacity="20%" />}
        spacing={4}
        align="stretch"
      >
        <Flex
          as="header"
          w="100%"
          maxWidth={1480}
          h="5"
          mx="auto"
          mt="4"
          px="6"
          align="center"
        >
          <Heading fontSize={22}>Nome da Escola</Heading>
        </Flex>

        <Box ml={6}>
          <ListBook />
        </Box>
      </VStack>
    </Flex>
  );
}
