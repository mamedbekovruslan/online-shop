import {
  Flex,
  Input,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";

export const ManageProduct = () => {
  return (
    <Flex>
      <Flex direction="column">
        <h1>Блок для добавления или редактирования товара</h1>
        <Flex direction="column">
          <Input />
          <Input />
          <Select />
          <Input />
          <Input />
        </Flex>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Наименования</Th>
              <Th>Категория</Th>
              <Th>Стоимость</Th>
              <Th>Кол-во</Th>
              <Th>Фото</Th>
              <Th>Действия</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Th>1</Th>
              <Th>Nothing Phone 1</Th>
              <Th>Смартфоны</Th>
              <Th>32 000р</Th>
              <Th>7шт</Th>
              <Th>Фото</Th>
              <Th>
                <Button>Изменить</Button>
                <Button>Удалить</Button>
              </Th>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};
