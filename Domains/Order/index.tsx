import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
export const Order = () => {
  return (
    <Stack w="80%" mx="auto" mt="20px">
      <Stack boxShadow="xl" borderRadius="12px">
        <HStack mt={3} justifyContent="space-between">
          <Flex alignItems="center">
            <Box m={2} w="10px" h="10px" bg="green"></Box>
            <Text ml={3}>Хүргэгдсэн</Text>
          </Flex>
          <Text>2022/03/08 14:51</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Flex flexDir="column">
            <Text fontSize="14px">Захиалгын дугаар</Text>
            <Text>RT22321we3</Text>
          </Flex>
          <Stack>
            <Text fontSize="14px">Захиалсан огноо</Text>
            <Text>2022/03/08 14:51</Text>
          </Stack>
        </HStack>
        <HStack
          p={1}
          borderRadius=" 0 0 12px 12px"
          bg="gray.400"
          justifyContent="space-between"
        >
          <Flex flexDir="column">
            <Text>Захиалгын дүн</Text>
          </Flex>
          <Stack>
            <Text fontSize="14px">89,652₮</Text>
          </Stack>
        </HStack>
      </Stack>
    </Stack>
  );
};
