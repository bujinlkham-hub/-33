import { AppProps } from "next/dist/shared/lib/router/router";
import NextNProgress from "nextjs-progressbar";
import Header from "./Header";
import { Box, useDisclosure } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
const LayOut = ({ Component, pageProps }: AppProps) => {
  const {
    isOpen: drawerIsOpen,
    onClose: drawerOnClose,
    onOpen: drawerOnOpen,
  } = useDisclosure();
  return (
    <>
      <NextNProgress />
      <Header onOpen={drawerOnOpen} />
      <Box bg="white" h="70px" />
      <Component {...pageProps} />
      <Sidebar isOpen={drawerIsOpen} onClose={drawerOnClose} />
      <Box h="100px" />
      <Footer />
    </>
  );
};
export default LayOut;
