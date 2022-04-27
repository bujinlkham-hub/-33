import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
const icons = [
  { title: "Нүүр", icon: AiOutlineHome, link: "/" },
  {
    title: "Хадгалсан бараа",
    icon: BsFillSuitHeartFill,
    link: "/saved_product",
  },
  { title: "Захиалга", icon: MdOutlineShoppingCart, link: "/order" },
];

export const Footer = () => {
  const router = useRouter();
  return (
    <>
      <Stack zIndex="10" pos="fixed" bottom="0" w="100%" py="10px" bg="white">
        <SimpleGrid
          mx="auto"
          color="white"
          flexDir="column"
          w="100%"
          columns={[3, 3, 3]}
        >
          {icons.map((el: any, ind: number) => {
            return (
              <>
                <Link href={el.link}>
                  <Stack
                    key={ind}
                    justifyContent="center"
                    alignItems="center"
                    color={router.pathname === el.link ? "green" : "gray"}
                  >
                    <Icon fontSize="xl" as={el.icon} />
                    <Text fontSize="10px">{el.title}</Text>
                  </Stack>
                </Link>
              </>
            );
          })}
        </SimpleGrid>
      </Stack>
    </>
  );
};
