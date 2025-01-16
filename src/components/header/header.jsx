import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Flex w="100%" justifyContent="center" bg="#2E5077" padding={5}>
      <Box w="30%" display="flex" justifyContent="space-between">
        <Link to="/cart" style={{ color: "white" }}>
          Корзина
        </Link>
        <Link to="/" style={{ color: "white" }}>
          Главная
        </Link>
        <Link to="/manage-product" style={{ color: "white" }}>
          Управление
        </Link>
      </Box>
      <Box position="absolute" right="5">
        <Link to="/auth" style={{ color: "white" }}>
          Вход
        </Link>
      </Box>
    </Flex>
  );
};
