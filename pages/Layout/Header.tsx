import { Box, Flex, HStack, Image, Select, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { useRouter } from "next/router";
const header = [{ title: "Home", link: "/" }];
interface Header {
  onOpen: () => void;
}

const Header = ({ onOpen }: Header) => {
  const router = useRouter();
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  console.log(offset);
  return (
    <HStack
      bg={router.pathname === "/" && offset === 0 ? "" : "gray.100"}
      w="100%"
      zIndex="10"
      pos="fixed"
      color={router.pathname === "/" && offset === 0 ? "white" : "black"}
      transition="ease .2s"
      py={3}
      px={10}
      justifyContent="space-between"
      boxShadow={router.pathname === "/" && offset === 0 ? "" : "xl"}
    >
      <HStack>
        <Link href="/profile">
          <Image
            w="50px"
            h="50px"
            borderRadius="50%"
            src="https://cdn.discordapp.com/attachments/967177210706411523/968075358018633758/Sneka_peek_2.png"
          />
        </Link>
        <Text color="black">Сайн байна уу</Text>
      </HStack>
      <HStack>
        <Box color="green" mr={3}>
          <FiShoppingCart />
        </Box>
        <Box
          color="black"
          onClick={onOpen}
          display={["block", "block", "block", "block", "none", "none"]}
        >
          <FiMenu />
        </Box>
      </HStack>
    </HStack>
  );
};
export default Header;
