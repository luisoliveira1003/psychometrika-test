import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import React, { FormEvent, useEffect, useState } from "react";
import NoSSR from "react-no-ssr";
import DragDrop from "../../components/DragDrop";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { IBookProps } from "../../utils/types";

export default function Dashboard() {
  // const [nameFront, setNameFront] = useState("");
  // const [listSerieChapter, setListSerieChapter] = useState<IBookProps>();

  // function handleChangeNameFrontBook(event: FormEvent) {
  //   event.preventDefault();

  //   api.get("/books/list");
  // }

  // async function loadBooks() {
  //   return await api.get("/admin/list-book");
  // }

  // useEffect(() => {
  //   async function loadBooks() {
  //     const response = await api.get("/admin/list-book");

  //     setListSerieChapter(response);
  //   }
  //   loadBooks();
  // }, []);

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

        <Box ml={6}>
          <NoSSR>
            <DragDrop />
          </NoSSR>
        </Box>
      </VStack>
    </Flex>
  );
}
