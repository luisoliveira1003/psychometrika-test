import {
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";

import { Table, Thead, Tbody, Tr, Th, Td, chakra } from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { useTable, useSortBy } from "react-table";
import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import NoSSR from "react-no-ssr";
import DragDrop from "../../components/DragDrop";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header nameProfile="admin" />

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

        <Flex ml={20}>
          <NoSSR>
            <DragDrop />
          </NoSSR>
        </Flex>
      </VStack>
    </Flex>
  );
}
