import {
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  InputGroup,
  InputRightElement,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Router from "next/router";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../components/Form";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "Digite ao menos 8 caracteres"),
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const [show, setShow] = React.useState(false);
  const handleClickPassword = () => setShow(!show);

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    Router.push("/dashboard");
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={433}
        bg="white.900"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Heading size="lg" mb="5">
          <Image src="/images/logo-black.svg" mb="3" alt="Logo Psychometrika" />
          <Image
            src="/images/desafio-trainee.svg"
            alt="Texto Desafio Trainee"
          />
        </Heading>
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            borderColor="gray.300"
            placeholder="Seu email institucional"
            error={errors.email}
            {...register("email")}
          />
          <InputGroup size="lg">
            <Input
              name="password"
              type={show ? "text" : "password"}
              label="Senha"
              borderColor="gray.300"
              placeholder="Minímo de 8 caracteres"
              error={errors.password}
              {...register("password")}
            />
            <InputRightElement width="2.5rem" mt="8">
              <Image
                src={
                  show ? "/images/icons/eye-off.svg" : "/images/icons/eye.svg"
                }
                title={show ? "Ocultar" : "Exibir"}
                alt=""
                onClick={handleClickPassword}
              />
            </InputRightElement>
          </InputGroup>
        </Stack>

        <Button
          type="submit"
          mt={34}
          bgColor="cyan.500"
          color="white.900"
          size="lg"
          _hover={{
            bgColor: "cyan.600",
          }}
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
