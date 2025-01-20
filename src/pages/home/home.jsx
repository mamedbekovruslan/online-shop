import { Box, Flex, Text } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Flex>
      <Box>
        <Text>Смартфоны</Text>
        <Text>Телевизоры</Text>
        <Text>Ноутбуки</Text>
        <Text>Игровые консоли</Text>
      </Box>
      <Box>
        <Text>Сортировки</Text>
        <Flex>
          <Box>Товар 1</Box>
          <Box>Товар 2</Box>
          <Box>Товар 3</Box>
          <Box>Товар 4</Box>
        </Flex>
      </Box>
    </Flex>
  );
};
