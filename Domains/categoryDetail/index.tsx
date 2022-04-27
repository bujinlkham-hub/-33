import { Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
export const CategoryDetail = ({ data, cat }: any) => {
  console.log(cat);
  return (
    <Stack>
      <Text mt={10} fontSize="2xl" fontWeight="semibold" mx={4}>
        {cat}
      </Text>
      <SimpleGrid w="90%" mx="auto" columns={2} spacing={5}>
        {data.map((el: any, ind: number) => {
          return (
            <Link href={`product-detail/${el._id}`}>
              <Stack p={2} boxShadow="xl" borderRadius="12px" key={ind}>
                <Image w="100%" h="20vh" src={el.image_url} alt="category" />
                <Text>{el.description}</Text>
                <Text>Үнэ:{el.price}</Text>
              </Stack>
            </Link>
          );
        })}
      </SimpleGrid>
    </Stack>
  );
};
