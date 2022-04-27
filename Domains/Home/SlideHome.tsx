import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";
const Img = [
  "https://cdn.discordapp.com/attachments/968457755620933635/968478207600914462/boot7.jpg",
  "https://cdn.discordapp.com/attachments/968457755620933635/968479517570125884/vegan-high-heels-fair-pointed-toe-pumps-high-black-1.jpg",
];
export const SlideHome = () => {
  const NextArr = () => {
    return <Flex display="none">sda</Flex>;
  };
  const PrevArr = () => {
    return <Flex display="none">sda</Flex>;
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    duration: 2,
    nextArrow: <NextArr />,
    prevArrow: <PrevArr />,
  };
  return (
    <>
      <Slider {...settings}>
        {Img.map((el: any, ind: number) => {
          return (
            <Box key={ind} px={10} py={4}>
              <Flex
                borderRadius="20px"
                h="30vh"
                bg={`url(${el})`}
                bgSize="cover"
                bgPos="center"
                bgRepeat="no-repeat"
                flexDir="column"
                justifyContent="space-between"
              >
                {" "}
                <Box />
                <Text fontSize="2xl" mb={4} color="gray">
                  20% OFF
                </Text>
              </Flex>
              {/* <Image borderRadius="30px" w="100%" h="20vh" src={el} /> */}
            </Box>
          );
        })}
      </Slider>
    </>
  );
};
