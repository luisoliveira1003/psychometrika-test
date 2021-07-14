import {
  Flex,
  Box,
  Text,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Router from "next/router";

interface ProfileProps {
  nameProfile: string;
}

export function Profile({ nameProfile }: ProfileProps) {
  const [profile, setProfile] = useState(nameProfile);

  useEffect(() => {
    setProfile(nameProfile);
  }, [nameProfile]);

  const ArrowBottom = (props) => (
    <Icon viewBox="0 0 16 16" {...props}>
      <path
        fill="#616161"
        d="M3.41 4.76514L8 9.34514L12.59 4.76514L14 6.17514L8 12.1751L2 6.17514L3.41 4.76514Z"
      />
    </Icon>
  );

  function handleChangeProfile(value) {
    setProfile(value);
  }

  function changeProfile() {
    if (profile === "admin") {
      Router.push("/dashboard");
    } else {
      Router.push("/dashboard/aluno");
    }
  }

  function handleSignOut() {
    return Router.push("/");
  }

  return (
    <Menu placement="bottom-start">
      <MenuButton>
        <Avatar
          size="md"
          name={changeProfile ? "Admin" : "Aluno"}
          bg="white.900"
          color="blue.100"
          fontFamily="sans-serif"
          fontWeight="bold"
          opacity="50%"
        />
        <ArrowBottom mt="4" ml={4} />
      </MenuButton>
      <MenuList>
        <Text ml="2" mt="2" mb="2" fontWeight="bold" color="gray.500">
          Você está atualmente com
        </Text>

        <RadioGroup
          ml="2.5"
          defaultValue={profile === "admin" ? "admin" : "aluno"}
        >
          <Stack spacing={2} direction="column">
            <Radio
              value="admin"
              name="typeProfile"
              colorScheme="cyan"
              borderColor="cyan.500"
              _hover={{
                cursor: "pointer",
              }}
              onChange={() => handleChangeProfile("admin")}
            >
              Acesso do Admin
            </Radio>

            <Radio
              value="aluno"
              name="typeProfile"
              colorScheme="cyan"
              borderColor="cyan.500"
              _hover={{
                cursor: "pointer",
              }}
              onChange={() => handleChangeProfile("aluno")}
            >
              Acesso do Aluno
            </Radio>
          </Stack>
        </RadioGroup>

        <MenuItem>
          <Button
            type="submit"
            color="cyan.500"
            variant="link"
            onClick={changeProfile}
          >
            Alterar
          </Button>
        </MenuItem>

        <Stack>
          <Button color="cyan.500" variant="link" onClick={handleSignOut}>
            Sair
          </Button>
        </Stack>
      </MenuList>
    </Menu>
  );
}
