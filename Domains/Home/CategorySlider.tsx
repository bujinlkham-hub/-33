import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
const Img = [
  "https://cdn.discordapp.com/attachments/967177210706411523/967177251097546772/3.jpg",
  "https://cdn.discordapp.com/attachments/967177210706411523/967177268776538132/2.jpg",
  "https://cdn.discordapp.com/attachments/967177210706411523/967177286124179486/1.jpg",
  "https://cdn.discordapp.com/attachments/967177210706411523/967177251097546772/3.jpg",
  "https://cdn.discordapp.com/attachments/967177210706411523/967177268776538132/2.jpg",
  "https://cdn.discordapp.com/attachments/967177210706411523/967177286124179486/1.jpg",
  "https://cdn.discordapp.com/attachments/967177210706411523/967177251097546772/3.jpg",
  "https://cdn.discordapp.com/attachments/967177210706411523/967177268776538132/2.jpg",
  "https://cdn.discordapp.com/attachments/967177210706411523/967177286124179486/1.jpg",
];
export const CategorySlider = () => {
  const NextArr = () => {
    return <Flex display="none">sda</Flex>;
  };
  const PrevArr = () => {
    return <Flex display="none">sda</Flex>;
  };
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  const [data, setData] = useState<any>();
  useEffect(() => {
    axios
      .get("http://192.168.1.19:247/category")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("sda", data);
  if (!data) {
    return null;
  }
  return (
    <>
      <Slider {...settings}>
        {data.map((el: any, ind: number) => {
          return (
            <>
              <Link href={`/${el._id}`}>
                <Stack key={ind} p={2}>
                  <Image
                    justifyContent="center"
                    borderRadius="30px"
                    h="15vh"
                    src={el.image_url}
                  />
                  <Text textAlign="center">{el.name}</Text>
                </Stack>
              </Link>
            </>
          );
        })}
      </Slider>
    </>
  );
};
