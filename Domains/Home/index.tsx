import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useColor } from "../../Context/ColorContext";

import { SlideHome } from "./SlideHome";

import { CategorySlider } from "./CategorySlider";
import { SpecialShop } from "./SpecalShop";
export const Home = () => {
  const { bg } = useColor();
  return (
    <>
      <Box m={5}>
        <Input
          type="search"
          placeholder="Дэлгүүр, бүтээгдэхүүний нэр..."
          bg="white"
        />
      </Box>
      <Box>
        <SlideHome />
      </Box>
      <Box>
        <Text fontSize="2xl" p={2}>
          Барааны төрлүүд
        </Text>
        <CategorySlider />
      </Box>
      <Box>
        <Text fontSize="2xl" p={2}>
          Онцлох дэлгүүр
        </Text>
        <SpecialShop />
      </Box>
    </>
  );
};
