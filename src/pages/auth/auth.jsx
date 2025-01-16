import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().email("Неверный email").required("Email обязателен"),
  password: yup
    .string()
    .min(6, "Пароль должен быть не менее 6 символов")
    .required("Пароль обязателен"),
});

const registerSchema = yup.object({
  name: yup.string().required("Имя обязательно"),
  email: yup.string().email("Неверный email").required("Email обязателен"),
  password: yup
    .string()
    .min(6, "Пароль должен быть не менее 6 символов")
    .required("Пароль обязателен"),
});

export const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(isRegistering ? registerSchema : loginSchema),
  });

  const onSubmit = (_) => {
    if (isRegistering) {
      toast({
        title: "Регистрация успешна",
        description: "Вы успешно зарегистрировались.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Авторизация успешна",
        description: "Вы успешно авторизовались.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    reset();
  };

  return (
    <Box
      width="sm"
      mx="auto"
      p="6"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          {isRegistering && (
            <FormControl isInvalid={errors.name}>
              <FormLabel>Имя</FormLabel>
              <Input {...register("name")} placeholder="Введите ваше имя" />
              <Text color="red.500" fontSize="sm">
                {errors.name?.message}
              </Text>
            </FormControl>
          )}

          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input {...register("email")} placeholder="Введите ваш email" />
            <Text color="red.500" fontSize="sm">
              {errors.email?.message}
            </Text>
          </FormControl>

          <FormControl isInvalid={errors.password}>
            <FormLabel>Пароль</FormLabel>
            <Input
              type="password"
              {...register("password")}
              placeholder="Введите ваш пароль"
            />
            <Text color="red.500" fontSize="sm">
              {errors.password?.message}
            </Text>
          </FormControl>

          <Button type="submit" colorScheme="teal" size="lg" width="full">
            {isRegistering ? "Зарегистрироваться" : "Войти"}
          </Button>

          <Text textAlign="center">
            {isRegistering ? (
              <>
                Уже есть аккаунт?{" "}
                <Button
                  variant="link"
                  colorScheme="teal"
                  onClick={() => setIsRegistering(false)}
                >
                  Войти
                </Button>
              </>
            ) : (
              <>
                Нет аккаунта?{" "}
                <Button
                  variant="link"
                  colorScheme="teal"
                  onClick={() => setIsRegistering(true)}
                >
                  Зарегистрироваться
                </Button>
              </>
            )}
          </Text>
        </Stack>
      </form>
    </Box>
  );
};
