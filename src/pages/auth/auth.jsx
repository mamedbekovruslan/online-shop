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

export const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

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

    setEmail("");
    setPassword("");
    setName("");
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
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          {isRegistering && (
            <FormControl id="name" isRequired>
              <FormLabel>Имя</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите ваше имя"
              />
            </FormControl>
          )}

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите ваш email"
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Пароль</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите ваш пароль"
            />
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
