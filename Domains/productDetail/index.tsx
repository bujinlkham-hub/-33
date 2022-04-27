import {
  Flex,
  Stack,
  Image,
  HStack,
  Text,
  Box,
  Button,
} from "@chakra-ui/react/";
import { PaymentModal } from "./payment";
export const ProductDetail = ({ data }: any) => {
  return (
    <Stack>
      <Image p={3} h="400px" src={data?.image_url} />

      <Text fontSize="2xl" fontWeight="bold" px={5}>
        {data?.name}
      </Text>

      <HStack justifyContent="space-between" px={10}>
        <Text>Гутал</Text>
        <Text>Үнэ: {data?.price}₮</Text>
      </HStack>
      <HStack justifyContent="space-between" px={10}>
        <Text>Дэлгүүр</Text>
        <Text>{data?.store}</Text>
      </HStack>
      <HStack justifyContent="space-between" px={10}>
        <Text>Хямдрал</Text>
        <Text>{data?.discount}₮</Text>
      </HStack>
      <HStack justifyContent="space-between" px={10}>
        <Text>Өнгө</Text>
        <Text>{data?.colors}</Text>
      </HStack>
      <Text textAlign="center" fontSize="2xl">
        Хэмжээ
      </Text>
      <HStack justifyContent="center" spacing={1}>
        <Box border="1px solid black" px={1}>
          <Text>{data?.size}</Text>
        </Box>
      </HStack>
      <Box h="100px" mx="auto" w="70%" />
      <PaymentModal data={data} />
    </Stack>
  );
};
