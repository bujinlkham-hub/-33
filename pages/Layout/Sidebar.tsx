import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Text,
  HStack,
  Spacer,
  Divider,
  Icon,
  Select,
  Stack,
  Input,
} from "@chakra-ui/react";
import { UseSize } from "../../Hooks/UseSize";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiKakaoTalkLine } from "react-icons/ri";
import { SiNaver } from "react-icons/si";

const icons = [FaFacebookF, BsInstagram, RiKakaoTalkLine];

import { useState } from "react";
const sideData = [
  "Гэр ахуй",
  "Эмэгтэй хувцас",
  "Эрэгтэй хувцас",
  "Спорт бараа",
  "Хүнсний бүтээгдэхүүн",
  "Гоо сайхан",
  "Үнэт эдлэл",
  "Хүүхдийн тоглоом",
  "Бичиг хэрэг",
  "Электорон бараа",
  "Гар утас ",
  "Бөс бараа",
];
interface Sidebar {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: Sidebar) => {
  // const size = UseSize("drawer");

  const props = {
    isOpen,
    onClose,
  };

  return (
    <Drawer {...props}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerCloseButton />
        </DrawerHeader>
        <DrawerBody pt={3} zIndex="12">
          <Stack w="100%" h="100%">
            <Input
              type="search"
              placeholder="Дэлгүүр, бүтээгдэхүүний нэр..."
              bg="white"
            />
            {sideData.map((el) => {
              return (
                <>
                  <Text>{el}</Text>
                  <Divider />
                </>
              );
            })}
            <HStack justifyContent="center" spacing={4} pt={10}>
              {icons.map((el) => {
                return (
                  <Icon cursor="pointer" color="gray" fontSize="2xl" as={el} />
                );
              })}
            </HStack>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
