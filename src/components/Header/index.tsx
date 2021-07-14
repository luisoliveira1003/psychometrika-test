import { Flex } from "@chakra-ui/react";
import { Logo } from "../Header/Logo";
import { Profile } from "../Header/Profile";

interface ProfileProps {
  nameProfile: string;
}

export function Header({ nameProfile }: ProfileProps) {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <Flex align="center=" ml="auto">
        <Profile nameProfile={nameProfile} />
      </Flex>
    </Flex>
  );
}
