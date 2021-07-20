import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Spinner,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ISerieProps } from "../../utils/types";
import { OpenLinkIcon, RestorIcon } from "../Icons/IconsAll";

export default function ListBook() {
  const [books, setBooks] = useState([]);
  const [serie, setSerie] = useState<ISerieProps>();
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    async function loading() {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSpinner(false);
    }

    loading();

    async function loadBooks() {
      const response = await api.get("/student/list-book-student");

      setSerie(response.data.serie);
      setBooks(response.data.chapter);
    }
    loadBooks();
  }, []);

  return (
    <>
      {spinner ? (
        <Flex w="100%" maxWidth={1260} align="center" justify="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="cyan.500"
            size="xl"
          />
        </Flex>
      ) : (
        <>
          <Flex w="453px">
            <Heading fontSize={28} mb="4">
              1ª Série
            </Heading>
          </Flex>

          <Box ml="4">
            <Heading fontSize={22} mb="3">
              {serie?.name}
            </Heading>
            {books?.map(({ _id, sequence, name, status, html }, index) => {
              return (
                <Grid
                  templateColumns="repeat(4, 1fr)"
                  _hover={{
                    cursor: "auto",
                  }}
                  w="453px"
                  alignItems="center"
                  mb="20px"
                  borderRadius="4px"
                  h="40px"
                  key={_id}
                >
                  <Box
                    w="16px"
                    h="16px"
                    border="1px solid #8C939D"
                    borderRadius="50px"
                    textAlign="center"
                  >
                    <Text h="16px" fontSize="10px">
                      {index + 1}
                    </Text>
                  </Box>

                  <Box w="370px" ml={2}>
                    <Text>{name}</Text>
                  </Box>

                  <Flex
                    h="24px"
                    w="24px"
                    borderRadius="50px"
                    bg="white.900"
                    _hover={{
                      cursor: "pointer",
                      bg: "black.5",
                    }}
                    align="center"
                    justify="center"
                  >
                    <Link href={`/chapter/${_id}`}>
                      <a>
                        <OpenLinkIcon color="cyan.500" w="16px" h="16px" />
                      </a>
                    </Link>
                  </Flex>
                </Grid>
              );
            })}
          </Box>
        </>
      )}
    </>
  );
}
