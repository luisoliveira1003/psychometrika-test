import { Flex, Heading, Icon, Image, Link } from "@chakra-ui/react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { IChapterUnique } from "../../utils/types";

export default function Chapter({ chapter }: IChapterUnique) {
  return (
    <>
      <Header nameProfile="admin" />
      <Flex
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        justifyContent="start"
      >
        <Link href="/dashboard">
          <a>
            <Icon
              color="cyan.500"
              as={RiArrowLeftSLine}
              fontSize={[10, 25]}
              justifySelf="start"
            />
          </a>
        </Link>

        <Heading fontSize="xl">{chapter.name}</Heading>
      </Flex>

      <Flex justifyContent="center" mt="4">
        <Image src="/images/funcao-constante.svg" />
      </Flex>
    </>
  );
}

Chapter.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const { _id } = query;

  const response = await api.post("/find-chapter", {
    _id,
  });

  const chapter = response.data[0];

  return { chapter };
};
