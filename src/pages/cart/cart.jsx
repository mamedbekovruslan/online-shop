import { Box, Button, Flex } from "@chakra-ui/react";

export const Cart = () => {
  return (
    <Flex>
      <Flex direction="column">
        <Flex>
          <Box>Фото товара</Box>
          <Flex direction="column">
            <Box>Id товара</Box>
            <Box>Наименование</Box>
          </Flex>
          <Box>Кол-во</Box>
          <Box>Стоимость</Box>
          <Button>❌</Button>
        </Flex>
        <Flex>
          <Box>Фото товара</Box>
          <Flex direction="column">
            <Box>Id товара</Box>
            <Box>Наименование</Box>
          </Flex>
          <Box>Кол-во</Box>
          <Box>Стоимость</Box>
          <Button>❌</Button>
        </Flex>
        <Flex>
          <Box>Фото товара</Box>
          <Flex direction="column">
            <Box>Id товара</Box>
            <Box>Наименование</Box>
          </Flex>
          <Box>Кол-во</Box>
          <Box>Стоимость</Box>
          <Button>❌</Button>
        </Flex>
      </Flex>
      <Flex direction="column">
        <Box>Итого</Box>
        <Box>Итоговая сумма</Box>
        <Button>Оформить заказ</Button>
      </Flex>
    </Flex>
  );
};
