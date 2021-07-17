// import React, { useState, useCallback, useRef, useEffect } from "react";
// import { Space, Table } from "antd";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import update from "immutability-helper";
// import "antd/dist/antd.css";
// import { Icon, Image } from "@chakra-ui/react";

// const type = "DragableBodyRow";

// const DragableBodyRow = ({
//   index,
//   moveRow,
//   className,
//   style,
//   ...restProps
// }) => {
//   const ref = useRef();
//   const [{ isOver, dropClassName }, drop] = useDrop(
//     () => ({
//       accept: type,
//       collect: (monitor: any) => {
//         const { index: dragIndex } = monitor.getItem() || {};
//         if (dragIndex === index) {
//           return {};
//         }
//         return {
//           isOver: monitor.isOver(),
//           dropClassName:
//             dragIndex < index ? "drop-over-downward" : "drop-over-upward",
//         };
//       },
//       drop: (item: any) => {
//         moveRow(item.index, index);
//       },
//     }),
//     [index]
//   );

//   const [, drag] = useDrag(
//     () => ({
//       type,
//       item: { index },
//       collect: (monitor) => ({
//         isDragging: monitor.isDragging(),
//       }),
//     }),
//     [index]
//   );
//   drop(drag(ref));
//   return (
//     <tr
//       ref={ref}
//       className={`${className}${isOver ? dropClassName : ""}`}
//       style={{ cursor: "pointer", ...style }}
//       {...restProps}
//     ></tr>
//   );
// };

// const columns = [
//   {
//     //title: "Name",
//     dataIndex: "dragdrop",
//     key: "dragdrop",
//     render: (image) => {
//       return <Image src="/images/icons/dnd-icon.svg" />;
//     },
//   },
//   {
//     //title: "Age",
//     dataIndex: "number",
//     key: "number",
//   },
//   {
//     //title: "Age",
//     dataIndex: "name",
//     key: "name",
//   },
//   {
//     //title: "Address",
//     dataIndex: "visibility",
//     key: "visibility",
//   },
//   {
//     //title: "Address",
//     dataIndex: "link",
//     key: "link",
//   },
// ];

// const datas = [
//   {
//     number: 1,
//     name: "Conjuntos",
//     visibility: "icon",
//     link: "html",
//   },
//   {
//     number: 2,
//     name: "Conjuntos numéricos",
//     visibility: "icon",
//     link: "html",
//   },
//   {
//     number: 3,
//     name: "Relações e introdução à funções",
//     visibility: "icon",
//     link: "html",
//   },
//   {
//     number: 4,
//     name: "Função constante e função afim",
//     visibility: "icon",
//     link: "html",
//   },
// ];

// const DragDrop = () => {
//   const [data, setData] = useState(datas);

//   const components = {
//     body: {
//       row: DragableBodyRow,
//     },
//   };
//   const moveRow = useCallback(
//     (dragIndex, hoverIndex) => {
//       const dragRow = data[dragIndex];
//       setData(
//         update(data, {
//           $splice: [
//             [dragIndex, 1],
//             [hoverIndex, 0, dragRow],
//           ],
//         })
//       );
//     },
//     [data]
//   );
//   return (
//     <div className="container mt-5">
//       <DndProvider backend={HTML5Backend}>
//         <Table
//           key=""
//           columns={columns}
//           dataSource={data}
//           components={components}
//           onRow={(record, index) => ({
//             index,
//             moveRow,
//           })}
//           pagination={{ position: ["none"] }}
//         />
//       </DndProvider>
//     </div>
//   );
// };

// export default DragDrop;

/**Beautiful DnD */
// import { DragHandleIcon } from "@chakra-ui/icons";
// import {
//   Box,
//   Flex,
//   Grid,
//   Icon,
//   Image,
//   List,
//   ListIcon,
//   ListItem,
//   Text,
// } from "@chakra-ui/react";
// import React, { Component } from "react";
// import { EyeIcon, EyeOffIcon, OpenLinkIcon } from "../Icons/IconsAll";
// import {
//   resetServerContext,
//   DragDropContext,
//   Droppable,
//   Draggable,
// } from "react-beautiful-dnd";
// import Link from "next/link";
// import { GetServerSideProps } from "next";

// const books = [
//   {
//     slug: "1",
//     name: "Conjuntos",
//     status: true,
//     link: "http",
//   },
//   {
//     slug: "2",
//     name: "Conjuntos numéricos",
//     status: true,
//     link: "http",
//   },
//   {
//     slug: "3",
//     name: "Relações e introdução à funções",
//     status: false,
//     link: "http",
//   },
//   {
//     slug: "4",
//     name: "Função constante e função afim",
//     status: true,
//     link: "http",
//   },
//   {
//     slug: "5",
//     name: "Função quadrática ou função polinomial do 2 grau",
//     status: false,
//     link: "http",
//   },
// ];

// export default class DragDrop extends Component {
//   state = { books: books };

//   onDragEnd = (result) => {
//     const { destination, source, reason } = result;
//     // Not a thing to do...
//     if (!destination || reason === "CANCEL") {
//       return;
//     }

//     if (
//       destination.droppableId === source.droppableId &&
//       destination.index === source.index
//     ) {
//       return;
//     }

//     const books = Object.assign([], this.state.books);
//     const droppedBook = this.state.books[source.index];

//     books.splice(source.index, 1);
//     books.splice(destination.index, 0, droppedBook);
//     this.setState({
//       books,
//     });
//   };

//   renderBooks = (item, index) => {
//     return (
//       <Draggable key={index} draggableId={`${index}`} index={index}>
//         {(provided, snapshot) => (
//           <Grid
//             ref={provided.innerRef}
//             {...provided.draggableProps}
//             {...provided.dragHandleProps}
//             templateColumns="repeat(5, 1fr)"
//             _hover={{
//               cursor: "auto",
//             }}
//             bgColor={!item.status ? "gray.100" : ""}
//             w="453px"
//             alignItems="center"
//             mb="20px"
//             borderRadius="4px"
//             gap="16px"
//           >
//             <Box w="16px" ml="16px">
//               <Icon
//                 as={DragHandleIcon}
//                 color="cyan.500"
//                 w="10px"
//                 h="16px"
//                 _hover={{
//                   cursor: "pointer",
//                 }}
//               />
//             </Box>

//             <Box
//               w="16px"
//               h="16px"
//               border="1px solid #8C939D"
//               borderRadius="50px"
//               textAlign="center"
//             >
//               <Text h="16px" fontSize="10px">
//                 {item.status ? index + 1 : ""}
//               </Text>
//             </Box>

//             <Box w="260px" ml={2}>
//               <Text textDecoration={!item.status ? "line-through" : ""}>
//                 {item.name}
//               </Text>
//             </Box>

//             <Box w="16px">
//               {item.status ? <Icon as={EyeIcon} /> : <Icon as={EyeOffIcon} />}
//             </Box>

//             <Box w="16px">
//               <Link href="/">
//                 <a>
//                   <OpenLinkIcon
//                     color="cyan.500"
//                     _hover={{
//                       color: "gray.700",
//                       cursor: "pointer",
//                     }}
//                   />
//                 </a>
//               </Link>
//             </Box>
//           </Grid>
//         )}
//       </Draggable>
//     );
//   };
//   render() {
//     return (
//       <DragDropContext onDragEnd={this.onDragEnd}>
//         <Droppable droppableId="droppable">
//           {(provided, snapshot) => (
//             <div {...provided.droppableProps} ref={provided.innerRef}>
//               {this.state.books.map(this.renderBooks)}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     );
//   }
// }

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   resetServerContext(); // <-- CALL RESET SERVER SIDE

//   return { props: { data: [] } };
// };

import { DragHandleIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { EyeIcon, EyeOffIcon, OpenLinkIcon } from "../Icons/IconsAll";

const listBooks = [
  {
    slug: "1",
    name: "Conjuntos",
    status: false,
    link: "http",
  },
  {
    slug: "2",
    name: "Conjuntos numéricos",
    status: true,
    link: "http",
  },
  {
    slug: "3",
    name: "Relações e introdução à funções",
    status: false,
    link: "http",
  },
  {
    slug: "4",
    name: "Função constante e função afim",
    status: true,
    link: "http",
  },
  {
    slug: "5",
    name: "Função quadrática ou função polinomial do 2 grau",
    status: true,
    link: "http",
  },
];
var countBk = new Array();

var count = 1;
listBooks.map((book) => {
  if (book.status) {
    countBk.push(count);
    count++;
  } else {
    countBk.push(0);
  }
});

export default function DragDrop() {
  const [books, setBooks] = useState(listBooks);

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

    books.map((b) => {
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
    <Flex direction="column">
      <Heading mb="6" size="lg">
        1ᵃ Série
      </Heading>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {books.map(({ slug, name, status, link }, index) => {
                return (
                  <Draggable key={slug} draggableId={slug} index={index}>
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
                        mb="20px"
                        borderRadius="4px"
                        gap="16px"
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
                          <Text textDecoration={!status ? "line-through" : ""}>
                            {name}
                          </Text>
                        </Box>

                        <Box w="16px">
                          {status ? (
                            <EyeIcon
                              color="cyan.500"
                              _hover={{
                                color: "blue.100",
                                cursor: "pointer",
                              }}
                            />
                          ) : (
                            <EyeOffIcon
                              fontSize="12px"
                              color="cyan.500"
                              _hover={{
                                color: "blue.100",
                                cursor: "pointer",
                              }}
                            />
                          )}
                        </Box>

                        <Box w="16px">
                          <Link href="/">
                            <a>
                              <OpenLinkIcon
                                color="cyan.500"
                                _hover={{
                                  color: "blue.100",
                                  cursor: "pointer",
                                }}
                              />
                            </a>
                          </Link>
                        </Box>
                      </Grid>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </Flex>
  );
}
