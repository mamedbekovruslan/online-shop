import { Box } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="gray.50" // фоновый цвет
      p={4} // отступы
    >
      {children}
    </Box>
  );
};
