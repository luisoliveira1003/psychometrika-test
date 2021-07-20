import { DragHandleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { api } from "../../services/api";
import { ISerieProps } from "../../utils/types";
import {
  EyeIcon,
  EyeOffIcon,
  OpenLinkIcon,
  RestorIcon,
} from "../Icons/IconsAll";

export default function DragDrop() {
  const [books, setBooks] = useState([]);
  const [serie, setSerie] = useState<ISerieProps>();
  const [spinner, setSpinner] = useState(true);

  const router = useRouter();

  useEffect(() => {
    async function loading() {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSpinner(false);
    }

    loading();

    async function loadBooks() {
      const response = await api.get("/admin/list-book");

      setSerie(response.data.serie);
      setBooks(response.data.chapter);
    }
    loadBooks();
  }, []);

  function toggleStatus(_id, status) {
    api.post("/admin/change-status", {
      _id,
      status,
    });

    router.reload();
  }

  function restoreBooksDefault(_id) {
    api.post("/admin/restore-books", {
      _id,
    });

    router.reload();
  }

  var countBk = new Array();

  var count = 1;
  books.map((book) => {
    if (book.status) {
      countBk.push(count);
      count++;
    } else {
      countBk.push(0);
    }
  });

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(books);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setBooks(items);
  }

  function countBooks() {
    var sumCount = countBk;
    var countTrue = 1;

    sumCount.length = 0;

    books?.map((b) => {
      if (b.status) {
        sumCount.push(countTrue);
        countTrue++;
      } else {
        sumCount.push(0);
      }
    });

    return sumCount;
  }

  useEffect(() => {
    countBooks();
  }, [books]);

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
        <Flex direction="column">
          <Flex justify="space-between" w="470px">
            <Heading fontSize={28} mb="4">
              1ª Série
            </Heading>

            <RestorIcon
              w="32px"
              h="32px"
              color="gray.600"
              _hover={{
                cursor: "pointer",
                color: "cyan.500",
              }}
              onClick={(e) => restoreBooksDefault(serie._id)}
            />
          </Flex>

          <Flex ml="4">
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="characters">
                {(provided) => (
                  <ul
                    className="characters"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <Heading fontSize={22} mb="3">
                      {serie?.name}
                    </Heading>
                    {books?.map(
                      ({ _id, sequence, name, status, html }, index) => {
                        return (
                          <Draggable
                            key={sequence}
                            draggableId={sequence}
                            index={index}
                          >
                            {(provided) => (
                              <Grid
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                templateColumns="repeat(5, 1fr)"
                                _hover={{
                                  cursor: "auto",
                                }}
                                bgColor={!status ? "gray.100" : ""}
                                w="453px"
                                alignItems="center"
                                mb="4px"
                                borderRadius="4px"
                                gap="16px"
                                h="58px"
                              >
                                <Box w="16px" ml="16px">
                                  <Icon
                                    as={DragHandleIcon}
                                    color="cyan.500"
                                    w="10px"
                                    h="16px"
                                    _hover={{
                                      color: "blue.100",
                                      cursor: "pointer",
                                    }}
                                  />
                                </Box>

                                <Box
                                  w="16px"
                                  h="16px"
                                  border="1px solid #8C939D"
                                  borderRadius="50px"
                                  textAlign="center"
                                >
                                  <Text h="16px" fontSize="10px">
                                    {countBooks()[index] !== 0
                                      ? countBooks()[index]
                                      : ""}
                                  </Text>
                                </Box>

                                <Box w="260px" ml={2}>
                                  <Text
                                    textDecoration={
                                      !status ? "line-through" : ""
                                    }
                                  >
                                    {name}
                                  </Text>
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
                                  {status ? (
                                    <EyeIcon
                                      color="cyan.500"
                                      w="16px"
                                      h="16px"
                                      onClick={(e) =>
                                        toggleStatus(_id, !status)
                                      }
                                    />
                                  ) : (
                                    <EyeOffIcon
                                      color="cyan.500"
                                      w="16px"
                                      h="16px"
                                      onClick={(e) =>
                                        toggleStatus(_id, !status)
                                      }
                                    />
                                  )}
                                </Flex>

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
                                      <OpenLinkIcon
                                        color="cyan.500"
                                        w="16px"
                                        h="16px"
                                      />
                                    </a>
                                  </Link>
                                </Flex>
                              </Grid>
                            )}
                          </Draggable>
                        );
                      }
                    )}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </Flex>
        </Flex>
      )}
    </>
  );
}
