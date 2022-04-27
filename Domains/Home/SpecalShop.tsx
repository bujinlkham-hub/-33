import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Slider from "react-slick";
const Img = [
  {
    image:
      "https://cdn.discordapp.com/attachments/968457755620933635/968852935687671838/5c5d0c328197c44af7ba3cc5d46e4c4b--gucci-store-showroom-design.jpg",
    name: "gucci",
  },

  {
    image:
      "https://cdn.discordapp.com/attachments/968457755620933635/968853009431937104/69517495-chiangmai-thailande-janvier-18-2017-boutique-mango-mango-est-une-societe-de-conception-de-vetements-.webp",
    name: "mango",
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/968457755620933635/968853346347802674/h-and-m-storefront.jpg",
    name: "H&M",
  },
];
export const SpecialShop = () => {
  const NextArr = () => {
    return <Flex display="none">sda</Flex>;
  };
  const PrevArr = () => {
    return <Flex display="none">sda</Flex>;
  };
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArr />,
    prevArrow: <PrevArr />,
  };
  return (
    <>
      <Slider {...settings}>
        {Img.map((el: any, ind: number) => {
          return (
            <>
              <SimpleGrid key={ind}>
                <Stack p={2}>
                  <Image
                    justifyContent="center"
                    borderRadius="30px"
                    h="25vh"
                    src={el.image}
                  />
                  <Text textAlign="center">{el.name}</Text>
                </Stack>
              </SimpleGrid>
            </>
          );
        })}
      </Slider>
    </>
  );
};
