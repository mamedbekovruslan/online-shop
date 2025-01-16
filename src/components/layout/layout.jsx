import { Box } from "@chakra-ui/react";
import { Header } from "../header/header";

export const Layout = ({ children }) => {
  return (
    <Box
      // minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Header />
      {children}
    </Box>
  );
};
