import { Box, Button, Flex } from "@chakra-ui/react";

export const Product = () => {
  return (
    <Flex>
      <Box>Фотка</Box>
      <Box>Описание товара</Box>
      <Box>
        <Button>Купить</Button>
        <Box>id товара</Box>
      </Box>
    </Flex>
  );
};
