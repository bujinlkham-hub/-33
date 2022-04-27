import { Button, Input, Stack, Text } from "@chakra-ui/react";
const profileData = [
  "Овог",
  "Нэр",
  "Утас",
  "Утас2",
  "Аймаг",
  "Нийслэл",
  "Сум",
  "Дүүрэг",
  "Дэлгэрэнгүй хаяг",
];
export const Profile = () => {
  return (
    <Stack mx="auto" spacing={5} w="80%" mt={10}>
      <Text fontSize="2xl">Хувийн мэдээлэл</Text>
      {profileData.map((el) => {
        return (
          <Stack>
            <Text fontSize="lg" opacity="0.8">
              {el}
            </Text>
            <Input placeholder={el} />
          </Stack>
        );
      })}
      <Button>Хадгалах</Button>
    </Stack>
  );
};
