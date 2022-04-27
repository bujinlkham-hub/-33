import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  useDisclosure,
  Flex,
  Stack,
  HStack,
  Box,
  Icon,
  Text,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import QRCode from "react-qr-code";

export const PaymentModal = ({ data }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Худалдан авах</Button>
      <Modal
        size="sm"
        closeOnOverlayClick={false}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bg="white" backdropFilter="blur(10px)">
          <ModalHeader>
            <ModalCloseButton p={3} />
          </ModalHeader>

          <ModalBody>
            <Flex flexDir="column" justifyContent="center" alignItems="center">
              <HStack justifyContent="space-between" px={10}>
                <Text>Үнэ</Text>
                <Text>{data?.price}</Text>
              </HStack>
              <HStack justifyContent="space-between" px={10}>
                <Text>Хямдрал</Text>
                <Text>{data?.discount}</Text>
              </HStack>
              <HStack justifyContent="space-between" px={10}>
                <Text>Төлвөл зохих дүн</Text>
                <Text>{data?.price - data?.discount}</Text>
              </HStack>
              <QRCode value="5556468469" level="H" />
              <Alert mt={3} status="error">
                <AlertIcon />
                Та QR Уншуулан төлбөрөө төлнө үү
              </Alert>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
