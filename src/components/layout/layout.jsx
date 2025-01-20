import { Box } from "@chakra-ui/react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Content } from "../content/content";

export const Layout = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Box>
  );
};
