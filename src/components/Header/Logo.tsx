import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <>
      <Flex fontSize={["2xl", "3xl"]}>
        <Image src="/images/logo-black.svg" alt="Logo Psychometrika" />

        <Image src="/images/desafio-trainee.svg" alt="Texto Desafio Trainee" ml={33}/>
      </Flex>
    </>
  );
}
